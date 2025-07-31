# Team Data Migration Instructions

This guide will help you migrate your existing team and board data to the new Groups structure.

## What Was Added

1. **New Team Group Object** (`schemas/objects/team.js`):
   - A reusable object with a required title and array of team members
   - Requires at least one team member

2. **New Groups Field** in the team document:
   - An array that accepts Team Group objects
   - This will eventually replace the existing 'team' and 'board' fields

## Migration Process

### Step 1: Get a Sanity Auth Token

1. Go to https://sanity.io/manage
2. Select your project (`Green Exchange`)
3. Go to **Settings > API**
4. Click **"Add API token"**
5. **Important**: Set permissions to **"Editor"** or **"Administrator"** (not "Viewer")
6. Give it a descriptive name like "Migration Script"
7. Copy the token immediately (you won't see it again)

### Step 2: Set Environment Variable

**Option A: Set directly in terminal (Recommended for troubleshooting)**
```bash
export SANITY_AUTH_TOKEN="your_token_here"
node migrate-team-data.js --dry-run
```

**Option B: Create .env.local file**
Create a `.env.local` file in your project root:
```
SANITY_AUTH_TOKEN=your_token_here
```
Then install dotenv and modify the script:
```bash
npm install dotenv
```

**Option C: Pass directly in command (Most reliable)**
```bash
SANITY_AUTH_TOKEN="your_token_here" node migrate-team-data.js --dry-run
```

### Step 3: Run Migration Script

#### Option A: Dry Run (Recommended First)
```bash
node migrate-team-data.js --dry-run
```
This will show you what data would be migrated without making any changes.

> **Note**: The script has been updated to use CommonJS syntax to avoid ES module import errors.

#### Option B: Run Actual Migration
```bash
node migrate-team-data.js
```

### Step 4: Verify the Migration

1. Open Sanity Studio
2. Go to the Team document
3. Check that the new "Groups" field contains:
   - "GIX Team" group with all previous team members
   - "Advisors and Board of Directors" group with all previous board members

### Step 5: Update Your Frontend

Update your frontend code to use the new `groups` structure instead of the `team` and `board` arrays:

**Before:**
```javascript
// Old structure
const { team, board } = teamData;
```

**After:**
```javascript
// New structure
const { groups } = teamData;
const gixTeam = groups.find(group => group.title === 'GIX Team');
const board = groups.find(group => group.title === 'Advisors and Board of Directors');
```

### Step 6: Remove Old Fields (Optional)

Once you've confirmed everything works, you can remove the old `team` and `board` fields from your schema:

1. Open `schemas/documents/team.js`
2. Remove the `team` and `board` field definitions
3. Deploy the updated schema

## Benefits of the New Structure

- **Flexible:** You can now add unlimited groups (e.g., "Advisory Board", "Consultants", "Alumni")
- **Consistent:** All groups use the same structure
- **Future-proof:** Easy to add new team categories without schema changes
- **Organized:** Better content management in Sanity Studio

## Troubleshooting

**Error: "Insufficient permissions; permission 'update' required"**

This can happen for several reasons:

1. **Token not loaded properly**:
   - Run the script and check the debug output
   - Make sure "Token present" shows `true`
   - Token should be around 40+ characters long

2. **Wrong project ID**:
   - Verify the token was created for project `6th4i42j`
   - Check in Sanity dashboard that this matches your project

3. **Dataset permissions**:
   - Make sure the token has access to the `production` dataset
   - Some tokens are restricted to specific datasets

4. **Try the most reliable method**:
   ```bash
   SANITY_AUTH_TOKEN="sk_your_actual_token_here" node migrate-team-data.js --dry-run
   ```

5. **Verify token format**:
   - Sanity tokens usually start with `sk`
   - Should be 40+ characters long
   - No extra spaces or quotes in the token itself

**Error: "Invalid token"**
- Make sure your SANITY_AUTH_TOKEN is set correctly
- Ensure the token has Editor or Administrator permissions (not Viewer)

**Error: "No team document found"**
- Make sure you have a team document in your dataset
- Check that you're using the correct dataset (production/development)

**Migration seems to run but no changes appear:**
- Verify you're looking at the correct dataset in Sanity Studio
- Try refreshing the Studio

## Rollback

If you need to rollback the migration:

1. The original `team` and `board` fields are preserved
2. You can manually remove the `groups` array from the team document in Sanity Studio
3. Or create a rollback script that removes the `groups` field

## Questions?

If you encounter any issues, check:
1. Your Sanity Auth Token permissions
2. The dataset you're targeting (production vs development)
3. Console output for detailed error messages