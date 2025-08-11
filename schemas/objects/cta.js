export default {
  title: "Call to action",
  name: "cta",
  type: "object",
  fieldsets: [
    {
      title: "Link",
      name: "link",
    },
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Link Type",
      name: "linkType",
      type: "string",
      options: {
        list: [
          { title: "Internal Link", value: "internal" },
          { title: "External Link", value: "external" },
        ],
        layout: "radio",
      },
      fieldset: "link",
    },
    {
      title: "Internal link",
      description: "Use this to link between pages on the website",
      name: "route",
      type: "reference",
      to: [
        { type: "home" },
        { type: "about" },
        { type: "team" },
        { type: "careers" },
        { type: "news" },
        { type: "faq" },
        { type: "contact" },
        { type: "article" },
      ],
      fieldset: "link",
      hidden: ({ parent }) => parent?.linkType !== "internal",
    },
    {
      title: "External link",
      name: "link",
      type: "url",
      fieldset: "link",
      hidden: ({ parent }) => parent?.linkType !== "external",
    },
  ],
  preview: {
    select: {
      title: "title",
      routeTitle: "route.title",
      slug: "route.slug.current",
      link: "link",
    },
    prepare({ title, routeTitle = "", slug, link }) {
      const subtitleExtra = slug
        ? `Slug:/${slug}/`
        : link
          ? `External link: ${link}`
          : "Not set";
      return {
        title: `${title}`,
        subtitle: `${routeTitle} ${subtitleExtra}`,
      };
    },
  },
};
