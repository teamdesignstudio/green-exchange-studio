# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Sanity v3 Content Studio for "Green Exchange" - a headless CMS application that manages content for a financial exchange platform. The studio provides content management for pages, news articles, team information, regulatory documents, and site settings.

**Key Technologies:**
- Sanity v3 (headless CMS)
- React 18
- Node.js >=18.17.0
- Styled Components
- ESLint with Sanity Studio configuration

## Development Commands

**Start development server:**
```bash
npm run dev
```
Runs Sanity Studio locally in development mode (typically on http://localhost:3333).

**Build for production:**
```bash
npm run build
```
Creates production build in `/dist` directory.

**Deploy to Sanity:**
```bash
npm run deploy
```
Deploys the studio to Sanity's hosted environment.

**Linting:**
```bash
npx eslint .
```
ESLint is configured with `@sanity/eslint-config-studio` extending Sanity's React and TypeScript rules.

## Architecture

### Configuration Structure

**Primary config:** `sanity.config.js` - Main Sanity configuration
- Project ID: `6th4i42j`
- Dataset: `production`
- Base path: `/studio`
- Plugins: custom structure tool, dashboard, Vercel deploy, Vision (dev only)

**Content structure:** `structure.js` - Custom studio structure definition
- Defines the sidebar navigation and content organization
- Uses `structureTool` to create custom content structure
- Hides certain document types from default listing to prevent duplication
- Groups related content (e.g., News Content, Regulation sections)

### Schema Organization

**Schema index:** `schemas/index.js` - Central schema registry

**Document schemas** (`schemas/documents/`):
- Singleton documents: `home`, `about`, `team`, `news`, `faq`, `contact`, `privacyPolicy`, `givingBack`, `siteSettings`
- Content collections: `article`, `author`, `category`
- Regulation documents: `listing`, `trading`, `regulatory`

**Object schemas** (`schemas/objects/`):
- Content blocks: `blockContent` (rich text with custom styles, images, podcast embeds)
- Page sections: `hero`, `imageSection`, `imageWide`, `textSection`, `cta`, `podcastPlayer`
- Reusable components: `faqItem`, `teamMember`, `textGridItem`, `iconRowItem`
- Regulation components: `regulationModule`, `documentCategory`

### Key Schema Patterns

**SEO metadata fieldset:**
All page-level documents include a standard metadata fieldset with:
- `description` (text) - for meta tags
- `openGraphImage` (image) - for social sharing

**Block content (rich text):**
Custom rich text editor defined in `blockContent.jsx`:
- Styles: Normal, H1-H4, Small, Quote
- Marks: Strong, Emphasis, Links
- Embeds: Images with caption/alt, Podcast players
- Custom renderers for special formatting

**Regulation modules:**
Special content type for regulatory documents (`regulationModule.jsx`):
- Supports both PDF uploads and external links
- Conditional field visibility based on document type
- Grouped items with heading, date, and description

**Icon row validation:**
The home page `iconRow` field requires exactly 4 items (enforced via validation).

### Studio Structure Navigation

The studio sidebar is organized as:
1. Core pages (Home, Vision, Team, News, About, FAQ, Contact, Privacy Policy)
2. Regulation section (nested: Listing, Trading, Regulatory)
3. News Content section (nested: Articles, Authors, Categories)
4. Remaining document types (filtered)
5. Site Settings (singleton)

Documents hidden from default listing: `page`, `home`, `about`, `team`, `news`, `faq`, `contact`, `siteSettings`, `article`, `author`, `category`, `privacyPolicy`, `givingBack`, `listing`, `trading`, `regulatory`

## File Extensions

- Document schemas: `.js` files
- Object schemas with custom components: `.jsx` files (e.g., `blockContent.jsx`, `regulationModule.jsx`)

## Important Notes

- The studio is configured to run at `/studio` base path (not root)
- Vision tool (GROQ query tool) only loads in development mode
- ESLint uses Sanity's official configuration with React and TypeScript support
- All singleton documents (home, about, etc.) are explicitly surfaced in the structure to prevent them from appearing in the default document list
