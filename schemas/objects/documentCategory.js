// TODO: The inline 'regulationModule' and 'regulationItem' types here duplicate
// the global types in regulationModule.js and documentItem.js. They have different
// fields (e.g. inline regulationItem has fileHeading/date/description, global has title).
// This is intentional — the regulatory page needs richer fields than listing/trading.
// To clean this up: rename the inline types to unique names (e.g. 'regulatoryDocItem')
// and run a content migration to update _type values in existing regulatory documents.
export default {
	name: 'documentCategory',
	title: 'Document Category',
	type: 'object',
	fields: [
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'modules',
			title: 'Sections',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'regulationModule',
					title: 'Regulation Module',
					fields: [
						{
							name: 'heading',
							title: 'Heading',
							type: 'string',
							validation: (Rule) => Rule.required(),
						},
						{
							name: 'description',
							title: 'Description',
							type: 'array',
							of: [{ type: 'block' }],
						},
						{
							name: 'items',
							title: 'Items',
							type: 'array',
							of: [
								{
									type: 'object',
									name: 'regulationItem',
									title: 'Regulation Item',
									fields: [
										{
											name: 'fileHeading',
											title: 'File',
											type: 'string',
										},
										{
											name: 'date',
											title: 'Date',
											type: 'date',
										},
										{
											name: 'description',
											title: 'Description',
											type: 'text',
										},
										{
											name: 'documentType',
											title: 'Document Type',
											type: 'string',
											options: {
												list: [
													{ title: 'PDF Upload', value: 'pdf' },
													{ title: 'External Link', value: 'link' },
												],
												layout: 'radio',
											},
											validation: (Rule) => Rule.required(),
										},
										{
											name: 'pdfDocument',
											title: 'PDF Document',
											type: 'file',
											options: {
												accept: '.pdf',
											},
											hidden: ({ parent }) => parent?.documentType !== 'pdf',
										},
										{
											name: 'externalLink',
											title: 'External Link',
											type: 'url',
											hidden: ({ parent }) => parent?.documentType !== 'link',
										},
									],
									preview: {
										select: {
											description: 'description',
											documentType: 'documentType',
										},
										prepare({ description, documentType }) {
											return {
												title: description,
												subtitle: documentType === 'pdf' ? 'PDF Document' : 'External Link',
											};
										},
									},
								},
							],
						},
					],
					preview: {
						select: {
							title: 'heading',
						},
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: 'heading',
		},
	},
};
