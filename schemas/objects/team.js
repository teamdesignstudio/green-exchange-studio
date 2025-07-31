export default {
  name: "teamGroup",
  title: "Group",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Group Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "showLinkedInIcons",
      title: "Show LinkedIn Icons",
      type: "boolean",
      description: "Display LinkedIn icons for members of this group",
      initialValue: true,
    },
    {
      name: "members",
      title: "Team Members",
      type: "array",
      of: [{ type: "teamMember" }],
      validation: (Rule) => Rule.min(1).required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      members: "members",
      firstMemberImage: "members.0.image",
    },
    prepare({ title, members, firstMemberImage }) {
      const memberCount = members ? Object.keys(members).length : 0;
      return {
        title,
        subtitle: `${memberCount} member${memberCount !== 1 ? "s" : ""}`,
        media: firstMemberImage,
      };
    },
  },
};
