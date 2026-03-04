// regulationModule.jsx

export default {
	name: 'regulationModule',
	title: 'Regulation Module',
	type: 'object',
	fields: [
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		// {
		// 	name: 'description',
		// 	title: 'Description',
		// 	type: 'array',
		// 	of: [{ type: 'block' }],
		// },
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
							type: 'date',
						},
						{
							name: 'description',
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
};
