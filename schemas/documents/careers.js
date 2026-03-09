export default {
	name: 'careers',
	title: 'Careers',
	type: 'document',
	__experimental_actions: [
		// Disable 'create' and 'delete' to make it a singleton
		'update',
		'publish',
	],
	fieldsets: [
		{
			name: 'yourImpact',
			title: 'Your Impact Section',
		},
		{
			name: 'whyWork',
			title: 'Why Work at GIX Section',
		},
		{
			name: 'joinTeam',
			title: 'Join Our Team Section',
		},
		{
			name: 'metadata',
			title: 'SEO & metadata',
		},
	],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'hero',
			title: 'Hero',
			type: 'hero',
		},
		{
			name: 'columnSectionOne',
			title: 'Column Section',
			type: 'threeColumnSection',
		},
		{
			name: 'benefits',
			title: 'Benefits',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'description',
			type: 'text',
			title: 'Description',
			description: 'This description populates meta-tags on the webpage',
			fieldset: 'metadata',
		},
		{
			name: 'openGraphImage',
			type: 'image',
			title: 'Open Graph Image',
			description: 'Image for sharing previews on Facebook, Twitter etc.',
			fieldset: 'metadata',
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'openGraphImage',
		},
	},
};
