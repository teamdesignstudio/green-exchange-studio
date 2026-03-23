export default {
	name: 'products',
	title: 'Products',
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
			name: 'threeColumnSection',
			title: 'Three Column Section',
			type: 'threeColumnSection',
		},
		{
			name: 'productAccordion',
			title: 'Product Accordion',
			type: 'productAccordion',
		},
		{
			name: 'productAccordion2',
			title: 'Product Accordion 2',
			type: 'productAccordion',
		},
		{
			name: 'disclaimer',
			type: 'text',
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
