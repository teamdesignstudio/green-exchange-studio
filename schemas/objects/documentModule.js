export default {
  name: "regulationModule",
  title: "Regulation Module",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "items",
      title: "Regulation Items",
      type: "array",
      of: [{ type: "regulationItem" }],
      validation: (Rule) => Rule.min(1),
    },
  ],
  preview: {
    select: {
      heading: "heading",
      itemCount: "items.length",
    },
    prepare(selection) {
      const { heading, itemCount } = selection;
      return {
        title: heading,
        subtitle: itemCount ? `${itemCount} items` : "No items",
      };
    },
  },
};
