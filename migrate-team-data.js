/**
 * Migration script to move existing 'team' and 'board' arrays
 * to the new 'groups' array structure in the team document.
 *
 * Run with: node migrate-team-data.js
 */

const { createClient } = require("@sanity/client");

// Initialize Sanity client
const client = createClient({
  projectId: "6th4i42j", // Your project ID from sanity.config.js
  dataset: "production", // Your dataset
  useCdn: false, // Set to false for mutations
  apiVersion: "2023-01-01", // Use current date
  token: process.env.SANITY_AUTH_TOKEN, // You'll need to set this
});

// Debug: Check if token is loaded
console.log("Debug info:");
console.log("- Token present:", !!process.env.SANITY_AUTH_TOKEN);
console.log("- Token length:", process.env.SANITY_AUTH_TOKEN?.length || 0);
console.log(
  "- Token starts with:",
  process.env.SANITY_AUTH_TOKEN?.substring(0, 8) + "..."
);
console.log("- Project ID:", "6th4i42j");
console.log("- Dataset:", "production");

async function migrateTeamData() {
  try {
    console.log("Starting team data migration...");

    // Fetch the team document
    const teamDoc = await client.fetch(`*[_type == "team"][0]`);

    if (!teamDoc) {
      console.log("No team document found. Migration not needed.");
      return;
    }

    console.log("Found team document:", teamDoc._id);

    // Check if migration has already been done
    if (teamDoc.groups && teamDoc.groups.length > 0) {
      console.log(
        "Groups array already exists with data. Migration may have already been completed."
      );
      console.log(
        "Current groups:",
        teamDoc.groups.map((g) => g.title)
      );

      // Ask user if they want to proceed
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const answer = await new Promise((resolve) => {
        readline.question(
          "Do you want to proceed anyway? This will add to existing groups. (y/n): ",
          resolve
        );
      });

      readline.close();

      if (answer.toLowerCase() !== "y") {
        console.log("Migration cancelled.");
        return;
      }
    }

    // Prepare the new groups array
    const newGroups = [];

    // Add GIX Team group if team array exists
    if (teamDoc.team && teamDoc.team.length > 0) {
      newGroups.push({
        _type: "teamGroup",
        title: "GIX Team",
        members: teamDoc.team,
      });
      console.log(
        `Adding "GIX Team" group with ${teamDoc.team.length} members`
      );
    }

    // Add Board group if board array exists
    if (teamDoc.board && teamDoc.board.length > 0) {
      newGroups.push({
        _type: "teamGroup",
        title: "Advisors and Board of Directors",
        members: teamDoc.board,
      });
      console.log(
        `Adding "Advisors and Board of Directors" group with ${teamDoc.board.length} members`
      );
    }

    if (newGroups.length === 0) {
      console.log("No data to migrate. Both team and board arrays are empty.");
      return;
    }

    // Combine with existing groups if any
    const existingGroups = teamDoc.groups || [];
    const allGroups = [...existingGroups, ...newGroups];

    // Update the document
    const result = await client
      .patch(teamDoc._id)
      .set({ groups: allGroups })
      .commit();

    console.log("Migration completed successfully!");
    console.log("Updated document:", result._id);
    console.log(`Total groups now: ${allGroups.length}`);

    // Optionally, you can remove the old fields after confirming the migration worked
    console.log("\nNext steps:");
    console.log("1. Verify the data in Sanity Studio");
    console.log("2. Test your frontend with the new groups structure");
    console.log(
      '3. Once confirmed, you can remove the old "team" and "board" fields from the schema'
    );
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

// Add a dry run option
const isDryRun = process.argv.includes("--dry-run");

if (isDryRun) {
  console.log("DRY RUN MODE - No changes will be made");

  // Fetch and display what would be migrated
  client.fetch(`*[_type == "team"][0]`).then((teamDoc) => {
    if (!teamDoc) {
      console.log("No team document found.");
      return;
    }

    console.log("Current team document structure:");
    console.log("- Team members:", teamDoc.team?.length || 0);
    console.log("- Board members:", teamDoc.board?.length || 0);
    console.log("- Existing groups:", teamDoc.groups?.length || 0);

    if (teamDoc.groups) {
      teamDoc.groups.forEach((group) => {
        console.log(
          `  - ${group.title}: ${group.members?.length || 0} members`
        );
      });
    }
  });
} else {
  migrateTeamData();
}
