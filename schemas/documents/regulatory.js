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
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'hero',
			title: 'Hero',
			type: 'hero',
		},
		{
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'categories',
			title: 'Document Categories',
			desctiption: 'Add document categories for the Regulatory pages',
			type: 'array',
			of: [{ type: 'documentCategory' }],
		},
		// {
		// 	name: 'modules',
		// 	title: 'Regulation Modules',
		// 	type: 'array',
		// 	of: [{ type: 'regulationModule' }],
		// 	description: 'Add modules containing regulation items for the regulatory page',
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
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'openGraphImage',
		},
	},
};
