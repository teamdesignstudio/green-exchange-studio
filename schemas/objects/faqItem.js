import blocksToText from '../../lib/portabletextToText';

export default {
	name: 'faqItem',
	title: 'FAQ Questions',
	type: 'object',
	fields: [
		{
			name: 'question',
			title: 'Question',
			type: 'string',
		},
		{
			title: 'Answer',
			name: 'answer',
			type: 'array',
			of: [{ type: 'block' }],
		},
	],
	preview: {
		select: {
			question: 'question',
			answer: 'answer',
		},
		prepare({ question, answer }) {
			return {
				title: question,
				subtitle: blocksToText(answer),
			};
		},
	},
};
