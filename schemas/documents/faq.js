export default {
	name: 'faq',
	title: 'FAQ',
	type: 'document',
	groups: [
		{ name: 'hero' },
		{ name: 'content' },
		{ name: 'oldContent', title: 'Previous Content' },
		{ name: 'metadata' },
	],
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
			group: 'hero',
		},
		{
			name: 'faqContent',
			title: 'FAQ Sections',
			type: 'array',
			group: 'content',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'heading',
							type: 'string',
						},
						{
							name: 'questions',
							type: 'array',
							of: [{ type: 'faqItem' }],
						},
					],
				},
			],
		},
		{
			name: 'general',
			title: 'General Questions',
			type: 'array',
			of: [{ type: 'faqItem' }],
			group: 'oldContent',
		},
		{
			name: 'issuers',
			title: 'Issuer Questions',
			type: 'array',
			of: [{ type: 'faqItem' }],
			group: 'oldContent',
		},
		{
			name: 'investors',
			title: 'Investor Questions',
			type: 'array',
			of: [{ type: 'faqItem' }],
			group: 'oldContent',
		},
		{
			name: 'description',
			type: 'text',
			title: 'Description',
			description: 'This description populates meta-tags on the webpage',
			fieldset: 'metadata',
			group: 'metadata',
		},
		{
			name: 'openGraphImage',
			type: 'image',
			title: 'Open Graph Image',
			description: 'Image for sharing previews on Facebook, Twitter etc.',
			fieldset: 'metadata',
			group: 'metadata',
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'openGraphImage',
		},
	},
};
