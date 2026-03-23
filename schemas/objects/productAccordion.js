export default {
	name: 'productAccordion',
	title: 'Product Accordion',
	type: 'object',
	fields: [
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
		},
		{
			name: 'text',
			title: 'Text',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'sharedImage',
			title: 'Shared Image',
			type: 'boolean',
			description:
				'When enabled, a single shared image is displayed for all accordion items. When disabled, each item uses its own image.',
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
			hidden: ({ parent }) => !parent?.sharedImage,
		},
		{
			name: 'items',
			title: 'Accordion Items',
			type: 'array',
			of: [{ type: 'productAccordionItem' }],
		},
	],
	preview: {
		select: {
			heading: 'heading',
		},
		prepare({ heading }) {
			return {
				title: heading,
				subtitle: 'Product Accordion',
			};
		},
	},
};
