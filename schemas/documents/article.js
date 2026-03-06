const NEWS_RELEASES_ID = '22e495ab-d12b-4bf6-8449-afd9fac75551';

const isNewsRelease = ({ document }) =>
	document?.categories?.[0]?._ref === NEWS_RELEASES_ID;

const isNotNewsRelease = ({ document }) => !isNewsRelease({ document });

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
			hidden: isNewsRelease,
		},
		{
			name: 'categories',
			title: 'Category',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
			validation: (Rule) => Rule.required().max(1),
		},
		{
			name: 'isPodcast',
			title: 'Is this article about a podcast episode?',
			description: 'This toggle will enable comments on this page',
			type: 'boolean',
			initialValue: false,
			hidden: isNewsRelease,
		},
		{
			name: 'lede',
			title: 'Lede',
			type: 'text',
			hidden: isNewsRelease,
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' },
			hidden: isNewsRelease,
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
			hidden: isNewsRelease,
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
			hidden: isNewsRelease,
		},
		{
			name: 'pdfFile',
			title: 'PDF File',
			description: 'Upload the news release PDF',
			type: 'file',
			options: {
				accept: '.pdf',
			},
			hidden: isNotNewsRelease,
		},
		{
			name: 'downloadTitle',
			title: 'Button Text',
			description: 'The text that will appear on the download button. Defaults to "Download PDF."',
			type: 'string',
			fieldset: 'download',
			initialValue: 'Download PDF',
			hidden: isNewsRelease,
		},
		{
			name: 'downloadFile',
			title: 'PDF File',
			description: 'Upload a file here to make the download button appear on the site.',
			type: 'file',
			fieldset: 'download',
			hidden: isNewsRelease,
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
