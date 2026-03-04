export default {
	name: 'siteSettings',
	type: 'document',
	title: 'Site settings',
	// https://www.sanity.io/docs/experimental/ui-affordances-for-actions
	__experimental_actions: ['create', 'delete', 'update', 'publish'],
	fieldsets: [
		{
			name: 'banner',
			title: 'Banner',
			description: 'This banner will be displayed on the top of each page',
			options: {
				collapsible: true,
				collapsed: false,
			},
		},
	],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Site title',
		},
		{
			name: 'enableBanner',
			type: 'boolean',
			title: 'Enable Banner',
			fieldset: 'banner',
		},
		{
			name: 'bannerText',
			type: 'string',
			title: 'Banner Text',
			fieldset: 'banner',
		},
		{
			name: 'bannerCta',
			type: 'cta',
			title: 'Banner CTA',
			fieldset: 'banner',
		},
		{
			name: 'footerContent',
			description: 'This text will be displayed in the footer on all pages of the site.',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			title: 'URL',
			name: 'url',
			type: 'url',
			description: 'The main site url. Used to create canonical url',
		},
		{
			title: 'Site language',
			description: 'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
			name: 'lang',
			type: 'string',
		},
		{
			title: 'Brand logo',
			description: 'Best choice is to use an SVG where the color is set with currentColor',
			name: 'logo',
			type: 'image',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
					description: 'Important for SEO and accessiblity.',
				},
			],
		},
		{
			title: 'Get In Touch Link',
			name: 'getInTouchLink',
			type: 'cta',
			description: "This will set the site-wide Get In Touch module's link",
		},
	],
};
