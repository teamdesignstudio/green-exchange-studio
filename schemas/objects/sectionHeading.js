export default {
	name: 'sectionHeading',
	title: 'Section Heading',
	type: 'object',
	fields: [
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'heading',
		},
		prepare({ title }) {
			return {
				title,
				subtitle: 'Section heading',
			};
		},
	},
};
