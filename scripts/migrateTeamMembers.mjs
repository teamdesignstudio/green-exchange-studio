import { createClient } from '@sanity/client';
import { v4 as uuidv4 } from 'uuid';

const client = createClient({
	projectId: '6th4i42j',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: false,
	token: process.env.SANITY_TOKEN,
});

async function migrate() {
	// Fetch the team document with inline teamMember objects
	const teamDoc = await client.fetch(`*[_type == "team"][0]{team, board}`);

	if (!teamDoc) {
		console.log('No team document found.');
		return;
	}

	const members = [...(teamDoc.team || []), ...(teamDoc.board || [])];

	if (members.length === 0) {
		console.log('No inline team members found to migrate.');
		return;
	}

	console.log(`Found ${members.length} team members to migrate.`);

	const transaction = client.transaction();

	for (const member of members) {
		const doc = {
			_id: uuidv4(),
			_type: 'teamMemberDoc',
			name: member.name,
			role: member.role,
			linkedIn: member.linkedIn,
			bio: member.bio,
			image: member.image,
		};

		console.log(`Creating: ${doc.name} (${doc.role || 'no role'})`);
		transaction.create(doc);
	}

	const result = await transaction.commit();
	console.log(`Migration complete. Created ${members.length} teamMemberDoc documents.`);
}

migrate().catch((err) => {
	console.error('Migration failed:', err.message);
	process.exit(1);
});
