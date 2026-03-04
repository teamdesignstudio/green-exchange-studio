// Global regulationItem type used by listing and trading pages (via regulationModule.js).
// Note: A different inline definition of 'regulationItem' with additional fields
// (fileHeading, date, description) exists in documentCategory.js for the regulatory page.
// See the TODO in documentCategory.js for cleanup plan.
export default {
  name: "regulationItem",
  title: "Regulation Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "documentType",
      title: "Document Type",
      type: "string",
      options: {
        list: [
          { title: "PDF", value: "pdf" },
          { title: "External Link", value: "external" },
          { title: "Document", value: "document" },
        ],
      },
    },
    {
      name: "pdfDocument",
      title: "PDF Document",
      type: "file",
      description: "Upload a PDF document",
      hidden: ({ parent }) => parent?.documentType !== "pdf",
    },
    {
      name: "externalLink",
      title: "External Link",
      type: "url",
      description: "Enter an external URL",
      hidden: ({ parent }) => parent?.documentType !== "external",
    },
  ],
  preview: {
    select: {
      title: "title",
      documentType: "documentType",
    },
    prepare(selection) {
      const { title, documentType } = selection;
      return {
        title: title,
        subtitle: documentType ? `Type: ${documentType}` : "No type specified",
      };
    },
  },
};
