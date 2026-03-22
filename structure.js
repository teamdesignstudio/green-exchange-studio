import { structureTool } from 'sanity/structure';

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
	![
		'page',
		'home',
		'about',
		'team',
		'news',
		'faq',
		'contact',
		'siteSettings',
		'article',
		'author',
		'category',
		'privacyPolicy',
		'givingBack',
		'careers',
		'listing',
		'trading',
		'regulatory',
		'teamMemberDoc',
		'products',
	].includes(listItem.getId());

export const structure = structureTool({
	name: 'content',
	title: 'Content',
	structure: (S) =>
		S.list()
			.title('Content')
			.items([
				S.documentListItem().id('home').schemaType('home').title('Home'),
				S.documentListItem().id('givingBack').schemaType('givingBack').title('About'),
				S.documentListItem().id('products').schemaType('products').title('Products'),
				S.documentListItem().id('news').schemaType('news').title('News'),
				S.documentListItem().id('team').schemaType('team').title('Team'),
				S.documentListItem().id('careers').schemaType('careers').title('Careers'),
				S.documentListItem().id('contact').schemaType('contact').title('Contact'),
				S.documentListItem().id('privacyPolicy').schemaType('privacyPolicy').title('Privacy Policy'),
				S.divider(),
				S.listItem()
					.title('Regulation')
					.child(
						S.list()
							.title('Regulation')
							.items([
								S.documentListItem().id('listing').schemaType('listing').title('Listing'),
								S.documentListItem().id('trading').schemaType('trading').title('Trading'),
								S.documentListItem().id('regulatory').schemaType('regulatory').title('Regulatory'),
							]),
					),
				S.divider(),
				S.listItem()
					.title('News Content')
					.child(
						S.list()
							.title('News')
							.items([
								S.listItem().title('All Articles').child(S.documentTypeList('article').title('All Articles')),
								S.listItem()
									.title('News Releases')
									.child(
										S.documentList()
											.title('News Releases')
											.filter('_type == "article" && references("22e495ab-d12b-4bf6-8449-afd9fac75551")'),
									),
								S.listItem()
									.title('Key Updates')
									.child(
										S.documentList()
											.title('Key Updates')
											.filter('_type == "article" && references("e141cfe0-ba45-432e-9052-0958fd7ce565")'),
									),
								S.listItem().title('Authors').child(S.documentTypeList('author').title('Authors')),
								S.listItem().title('Categories').child(S.documentTypeList('category').title('Categories')),
							]),
					),

				S.divider(),
				S.listItem()
					.title('Archived Content')
					.child(
						S.list()
							.title('Archived Content')
							.items([
								S.documentListItem().id('about').schemaType('about').title('Vision'),
								S.documentListItem().id('faq').schemaType('faq').title('FAQ'),
							]),
					),
				...S.documentTypeListItems().filter(hiddenDocTypes),
				S.divider(),
				S.documentListItem().id('siteSettings').schemaType('siteSettings').title('Site Settings'),
			]),
});
