import { structureTool } from "sanity/structure";

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
  ![
    "page",
    "home",
    "about",
    "team",
    "news",
    "faq",
    "contact",
    "siteSettings",
    "article",
    "author",
    "category",
    "privacyPolicy",
    "givingBack",
    "careers",
  ].includes(listItem.getId());

export const structure = structureTool({
  name: "content",
  title: "Content",
  structure: (S) =>
    S.list()
      .title("Content")
      .items([
        S.documentListItem().id("home").schemaType("home").title("Home"),
        S.documentListItem().id("about").schemaType("about").title("About"),
        S.documentListItem().id("team").schemaType("team").title("Team"),
        S.documentListItem().id("news").schemaType("news").title("News"),
        S.documentListItem()
          .id("givingBack")
          .schemaType("givingBack")
          .title("Giving Back"),
        S.documentListItem()
          .id("careers")
          .schemaType("careers")
          .title("Careers"),
        S.documentListItem().id("faq").schemaType("faq").title("FAQ"),
        S.documentListItem()
          .id("contact")
          .schemaType("contact")
          .title("Contact"),
        S.documentListItem()
          .id("privacyPolicy")
          .schemaType("privacyPolicy")
          .title("Privacy Policy"),
        S.divider(),
        S.listItem()
          .title("News Content")
          .child(
            S.list()
              .title("News")
              .items([
                S.listItem()
                  .title("Articles")
                  .child(S.documentTypeList("article").title("Articles")),
                S.listItem()
                  .title("Authors")
                  .child(S.documentTypeList("author").title("Authors")),
                S.listItem()
                  .title("Categories")
                  .child(S.documentTypeList("category").title("Categories")),
              ])
          ),

        ...S.documentTypeListItems().filter(hiddenDocTypes),
        S.divider(),
        S.documentListItem()
          .id("siteSettings")
          .schemaType("siteSettings")
          .title("Site Settings"),
      ]),
});
