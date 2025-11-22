import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Ali",
  subtitle: "",
  lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false, // Display the credit text of the banner image
      text: "", // Credit text to be displayed
      url: "", // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    //   src: "/favicon/icon.png", // Path of the favicon, relative to the /public directory
    //   theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // },
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    {
      name: "Blogs",
      url: "/blogs/"
    },
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: "GitHub",
    //   url: "https://github.com/Ali-Umed", // Internal links should not include the base path, as it is automatically added
    //   external: true, // Show an external link icon and will open in a new tab
    // },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar:
    "https://i.pinimg.com/736x/f2/d8/5e/f2d85e5d84312161bf5a383a2b28db11.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "Ali Umed",
  bio: "Fast builds. Clean UX. Modern code for modern screens.",
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/Ali-Umed",
    },
    {
      name: "LinkedIn",
      icon: "fa6-brands:linkedin", // Iconify icon set: Font Awesome 6 Brands
      url: "https://www.linkedin.com/in/ali-umed-076854286", // Replace with your actual LinkedIn URL
    },
    {
      name: "Email",
      icon: "fa6-solid:envelope", // Font Awesome 6 Solid set
      url: "mailto:aliumed844@gmail.com", // Replace with your actual email
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
  // Please select a dark theme, as this blog theme currently only supports dark background color
  theme: "github-dark",
};
