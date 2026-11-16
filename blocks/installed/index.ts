// Written by the admin panel when blocks are installed or removed. Don't edit it by hand.
import type { ComponentConfig, Config } from "@puckeditor/core";
import block0 from "./comments/block";
import block1 from "./countdown/block";
import block2 from "./custom-html/block";
import block3 from "./feed-list/block";
import block4 from "./logos/block";
import block5 from "./map/block";
import block6 from "./numbers/block";
import block7 from "./panel/block";
import block8 from "./people/block";
import block9 from "./section-links/block";
import block10 from "./shadcn-call-to-action/block";
import block11 from "./shadcn-cards/block";
import block12 from "./shadcn-carousel/block";
import block13 from "./shadcn-faq/block";
import block14 from "./shadcn-hero/block";
import block15 from "./shadcn-notice/block";
import block16 from "./shadcn-pricing/block";
import block17 from "./shadcn-tabs/block";
import block18 from "./shadcn-testimonials/block";
import block19 from "./slideshow-hero/block";
import block20 from "./social-links/block";
import block21 from "./timeline/block";

// biome-ignore lint/suspicious/noExplicitAny: blocks have arbitrary props
export const installedBlocks: Record<string, ComponentConfig<any>> = {
  "comments": block0,
  "countdown": block1,
  "custom-html": block2,
  "feed-list": block3,
  "logos": block4,
  "map": block5,
  "numbers": block6,
  "panel": block7,
  "people": block8,
  "section-links": block9,
  "shadcn-call-to-action": block10,
  "shadcn-cards": block11,
  "shadcn-carousel": block12,
  "shadcn-faq": block13,
  "shadcn-hero": block14,
  "shadcn-notice": block15,
  "shadcn-pricing": block16,
  "shadcn-tabs": block17,
  "shadcn-testimonials": block18,
  "slideshow-hero": block19,
  "social-links": block20,
  "timeline": block21,
};

export const installedCategories: NonNullable<Config["categories"]> = {
  "installed-interactive": { title: "Interactive", components: ["comments","countdown","shadcn-carousel","shadcn-faq","shadcn-tabs","slideshow-hero"] },
  "installed-advanced": { title: "Advanced", components: ["custom-html"] },
  "installed-page-sections": { title: "Page sections", components: ["feed-list","logos","map","numbers","panel","people","shadcn-call-to-action","shadcn-cards","shadcn-hero","shadcn-notice","shadcn-pricing","shadcn-testimonials","social-links","timeline"] },
  "installed-navigation": { title: "Navigation", components: ["section-links"] },
};
