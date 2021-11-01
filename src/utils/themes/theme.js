import { main, neutral, text } from "./colors";
export const mainTheme = {
  primaryColor: main[100],
  secondaryColor: main[300],
  tertiaryColor: main[200],
  background: neutral[100],
  textColor: text.text,
  links: {
    color: main[500],
    hover: {
      color: main[600],
    },
  },
  // * Navbar
  navbar: {
    background: neutral[100],
    color: text.text,
    hover: {
      background: main[200],
      color: main[600],
    },
  },
  // * Banner
  banner: {
    background: main.secondary,
    color: neutral[100],
  },
  // *  Buttons
  buttons: {
    primary: {
      background: main.primary,
      color: text.textInverted,
      hover: {
        background: main.secondary,
        color: text.textInverted,
      },
    },
    secondary: {
      background: main[300],
      color: text.textInverted,
      hover: {
        background: main[200],
        color: text.textInverted,
      },
    },
    tertiary: {
      background: main[500],
      color: main[200],

      hover: {
        background: main[300],
        color: main[600],
      },
    },
    social: {
      background: main[200],
      color: text.textInverted,
      hover: {
        background: main[300],
        color: text.textInverted,
      },
    },
  },
  // * Header text
  headerHero: {
    color: neutral[100],
    background: main[200],
  },
  // * About
  about: {
    background: main[400],
    color: text.textInverted,
  },
  // * Projects
  projects: {
    background: main[100],
    color: text.textInverted,
  },
  // * Experience
  experience: {
    background: main[300],
    color: text.textInverted,
    items: {
      titleColor: main[100],
      descriptionColor: main[400],
      background: main[400],
    },
  },
  // * Loader
  loader: {
    background: main.primary,
    loader: main[100],
  },
  // * Paragraph text
  paragraphText: neutral[100],
  // * Product cards
  productCard: {
    background: neutral[100],
    textColor: text.text,
    borderColor: neutral[200],
  },
  // * Footer
  footer: {
    background: main[300],
    color: text.textInverted,
  },
  // * Forms
  form: {
    background: neutral[100],
    color: text.text,
    borderColor: neutral[200],
  },
  // * Sidebar
  sidebar: {
    background: main[100],
    textColor: "#444",
    active: {
      background: main[200],
      textColor: "#fff",
    },
  },
  //  * Info cards
  infoCard: {
    background: main[600],
  },
  // * Filter container
  filterContainer: {
    background: main[600],
    selected: main[200],
  },
  // * Search results
  searchResults: {
    background: main[200],
    backgroundHover: main[600],
    textColor: neutral[100],
  },
};
