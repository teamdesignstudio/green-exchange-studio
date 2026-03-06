export default {
	name: 'givingBack',
	title: 'Giving Back',
	type: 'document',
	fieldsets: [
		{
			name: 'metadata',
			title: 'SEO & metadata',
		},
		{
			name: 'reasonsBlock',
			title: 'Reasons Block',
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
			name: 'textBlock1',
			title: 'Text Block',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'cta',
			type: 'cta',
			title: 'Call to action',
		},
		// {
		// 	name: 'reasonsBlockTitle',
		// 	title: 'Heading',
		// 	type: 'string',
		// 	fieldset: 'reasonsBlock',
		// },
		// {
		// 	name: 'reasonsBlockArr',
		// 	title: 'Reasons Block',
		// 	type: 'array',
		// 	of: [{ type: 'text' }],
		// 	fieldset: 'reasonsBlock',
		// },
		// {
		// 	name: 'textBlock2',
		// 	title: 'Text Block',
		// 	type: 'array',
		// 	of: [{ type: 'block' }],
		// },
		// {
		// 	name: 'logoGrid',
		// 	title: 'Organization Logos',
		// 	type: 'array',
		// 	of: [{ type: 'image' }],
		// 	options: {
		// 		layout: 'grid',
		// 	},
		// },
		{
			name: 'imageSection',
			type: 'imageSection',
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
