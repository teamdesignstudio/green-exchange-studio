// regulatory.js

export default {
	name: 'regulatory',
	title: 'Regulatory',
	type: 'document',
	fieldsets: [
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
			name: 'content',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'hero',
			title: 'Hero',
			type: 'hero',
		},
		{
			name: 'categories',
			title: 'Document Categories',
			type: 'array',
			of: [{ type: 'documentCategory' }],
		},
		// {
		// 	name: 'Modules',
		// 	type: 'array',
		// 	of: [{ type: 'regulationModule' }],
		// },
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
			validation: (Rule) => Rule.required(),
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'openGraphImage',
		},
	},
};
