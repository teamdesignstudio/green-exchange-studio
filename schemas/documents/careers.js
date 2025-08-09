export default {
  name: "careers",
  title: "Careers",
  type: "document",
  __experimental_actions: [
    // Disable 'create' and 'delete' to make it a singleton
    "update",
    "publish",
  ],
  fieldsets: [
    {
      name: "yourImpact",
      title: "Your Impact Section",
    },
    {
      name: "whyWork",
      title: "Why Work at GIX Section",
    },
    {
      name: "joinTeam",
      title: "Join Our Team Section",
    },
    {
      name: "metadata",
      title: "SEO & metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "hero",
      title: "Hero",
      type: "hero",
    },

    // Your Impact Section
    {
      name: "yourImpactSubtitle",
      type: "string",
      title: "Subtitle",
      fieldset: "yourImpact",
    },
    {
      name: "yourImpactTitle",
      type: "string",
      title: "Title",
      fieldset: "yourImpact",
    },
    {
      name: "yourImpactBody",
      type: "text",
      title: "Body Text",
      fieldset: "yourImpact",
    },
    {
      name: "yourImpactImage",
      type: "image",
      title: "Impact Image",
      fieldset: "yourImpact",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility",
        },
      ],
    },

    // Why Work at GIX Section
    {
      name: "whyWorkIntroText",
      type: "text",
      title: "Introduction Text",
      fieldset: "whyWork",
    },
    {
      name: "whyWorkTitle",
      type: "string",
      title: "Section Title",
      fieldset: "whyWork",
    },
    {
      name: "whyWorkReasons",
      type: "array",
      title: "Reasons to Work at GIX",
      fieldset: "whyWork",
      of: [
        {
          type: "text",
          title: "Reason",
        },
      ],
    },

    // Join Our Team Section
    {
      name: "joinTeamSubtitle",
      type: "string",
      title: "Subtitle",
      fieldset: "joinTeam",
    },
    {
      name: "joinTeamTitle",
      type: "string",
      title: "Title",
      fieldset: "joinTeam",
    },
    {
      name: "joinTeamLink",
      type: "url",
      title: "Link",
      fieldset: "joinTeam",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
