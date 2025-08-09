// Document schemas
import siteSettings from "./documents/siteSettings";
import home from "./documents/home";
import about from "./documents/about";
import team from "./documents/team";
import news from "./documents/news";
import faq from "./documents/faq";
import contact from "./documents/contact";
import privacyPolicy from "./documents/privacyPolicy";
import givingBack from "./documents/givingBack";
import page from "./documents/page";
import category from "./documents/category";
import article from "./documents/article";
import author from "./documents/author";
import careers from "./documents/careers";
import listing from "./documents/listing";
import trading from "./documents/trading";
import regulatory from "./documents/regulatory";

// Object schemas
import blockContent from "./objects/blockContent";
import hero from "./objects/hero";
import imageSection from "./objects/imageSection";
import imageWide from "./objects/imageWide";
import faqItem from "./objects/faqItem";
import teamMember from "./objects/teamMember";
import teamGroup from "./objects/team";
import textGridItem from "./objects/textGridItem";
import textSection from "./objects/textSection";
import cta from "./objects/cta";
import iconRowItem from "./objects/iconRowItem";
import podcastPlayer from "./objects/podcastPlayer";
import regulationItem from "./objects/documentItem";
import regulationModule from "./objects/documentModule";

export const schemaTypes = [
  // Document types
  siteSettings,
  home,
  about,
  team,
  news,
  faq,
  contact,
  article,
  author,
  category,
  privacyPolicy,
  givingBack,
  careers,
  page,
  listing,
  trading,
  regulatory,
  // Object types
  hero,
  imageSection,
  imageWide,
  blockContent,
  faqItem,
  teamMember,
  teamGroup,
  textGridItem,
  textSection,
  cta,
  iconRowItem,
  podcastPlayer,
  regulationItem,
  regulationModule,
];
