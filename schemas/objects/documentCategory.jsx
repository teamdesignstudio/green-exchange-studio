// documentCategory.jsx

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
			of: [{ type: 'regulationModule' }],
		},
	],
	preview: {
		select: {
			title: 'heading',
		},
	},
};
