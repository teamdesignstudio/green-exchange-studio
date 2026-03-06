export default {
	name: 'home',
	title: 'Home',
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
			name: 'hero',
			title: 'Hero',
			type: 'hero',
		},
		{
			name: 'columnSectionOne',
			type: 'threeColumnSection',
		},
		// {
		// 	name: 'imageSectionOne',
		// 	title: 'Image Section One',
		// 	type: 'imageSection',
		// },
		// {
		// 	name: 'iconRow',
		// 	title: 'Icon Row',
		// 	type: 'array',
		// 	of: [{ type: 'iconRowItem' }],
		// 	validation: (Rule) => Rule.required().length(4).error('This section requires four items'),
		// },
		{
			name: 'imageWide',
			title: 'Full-Width Image Section',
			type: 'imageSection',
		},
		{
			name: 'columnSectionTwo',
			type: 'threeColumnSection',
		},
		// {
		// 	name: 'imageSectionTwo',
		// 	title: 'Image Section Two',
		// 	type: 'imageSection',
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
