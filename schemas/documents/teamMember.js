export default {
	name: 'teamMemberDoc',
	title: 'Team Member',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'role',
			title: 'Role',
			type: 'string',
		},
		{
			name: 'linkedIn',
			title: 'LinkedIn URL',
			type: 'url',
		},
		{
			name: 'bio',
			title: 'Bio',
			type: 'text',
		},
		{
			name: 'image',
			title: 'Portrait',
			type: 'image',
		},
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'role',
			media: 'image',
		},
	},
};
