export default {
	name: 'article',
	title: 'Article',
	type: 'document',
	initialValue: {
		isPodcast: false,
	},
	fieldsets: [{ name: 'download', title: 'Download Button' }],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'isPodcast',
			title: 'Is this article about a podcast episode?',
			description: 'This toggle will enable comments on this page',
			type: 'boolean',
			initialValue: false,
		},
		{
			name: 'lede',
			title: 'Lede',
			type: 'text',
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' },
		},
		{
			name: 'mainImage',
			title: 'Main image',
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
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
		{
			name: 'downloadTitle',
			title: 'Button Text',
			description: 'The text that will appear on the download button. Defaults to "Download PDF."',
			type: 'string',
			fieldset: 'download',
			initialValue: 'Download PDF',
		},
		{
			name: 'downloadFile',
			title: 'PDF File',
			description: 'Upload a file here to make the download button appear on the site.',
			type: 'file',
			fieldset: 'download',
		},
	],
	initialValue: {
		isPodcast: false,
		downloadTitle: 'Download PDF',
	},
	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
