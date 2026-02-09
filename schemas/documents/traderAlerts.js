import { defineField, defineType } from "sanity";

const categories = [
  { title: "Trader Updates", value: "traderUpdates" },
  { title: "Corporate Action Notices", value: "corporateActionNotices" },
  { title: "Dividend Notices", value: "dividendNotices" },
  { title: "Listing Notices", value: "listingNotices" },
];

export default defineType({
  name: "traderAlerts",
  title: "Trader Alerts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "datetime",
      description:
        "The date and time when the alert was published. This is for display purposes only, but should reflect the actual publication time.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: categories,
      },
    }),
    defineField({
      name: "body",
      title: "Alert Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      publishedDate: "publishedDate",
    },
    prepare(selection) {
      const { title, category, publishedDate } = selection;
      return {
        title,
        subtitle:
          new Date(publishedDate).toLocaleDateString("en-US") +
          " - " +
          (categories.find((cat) => cat.value === category)?.title ||
            "No category"),
      };
    },
  },
});
