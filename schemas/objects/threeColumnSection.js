export default {
	type: 'object',
	name: 'threeColumnSection',
	title: 'Three Column Section',
	fieldsets: [
		{
			name: 'extras',
			title: 'CTA & Image',
			options: { collapsible: true, collapsed: true },
		},
	],
	fields: [
		{
			name: 'heading',
			type: 'string',
			title: 'Heading',
		},
		{
			name: 'columnOne',
			title: 'Column One',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'columnTwo',
			title: 'Column Two',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'cta',
			type: 'cta',
			title: 'Call to action',
			fieldset: 'extras',
		},
		{
			name: 'image',
			title: 'Image (Column Three)',
			fieldset: 'extras',
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
			heading: 'heading',
			media: 'image',
		},
		prepare({ heading, media }) {
			return {
				title: heading,
				subtitle: 'Three column section',
				media,
			};
		},
	},
};
