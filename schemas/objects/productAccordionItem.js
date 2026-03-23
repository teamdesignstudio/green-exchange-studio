export default {
	name: 'productAccordionItem',
	title: 'Product Accordion Item',
	type: 'object',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'hasDisclaimer',
			title: 'Has Disclaimer',
			type: 'boolean',
			initialValue: false,
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					type: 'string',
					description: 'Important for SEO and accessibility',
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'subtitle',
			media: 'image',
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				subtitle,
				media,
			};
		},
	},
};
