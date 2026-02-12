export const A4 = {
  WIDTH_PX: 794,
  HEIGHT_PX: 1123,
  WIDTH_MM: 210,
  HEIGHT_MM: 297,
  MARGIN: {
    TOP: 60,
    BOTTOM: 72,
    LEFT: 76,
    RIGHT: 76,
  },
  CONTENT: {
    WIDTH: 794 - 76 - 76,
    HEIGHT: 1123 - 60 - 72,
  },
} as const;

export const COLORS = {
  NAVY: "#1B3A5C",
  ACCENT: "#2C5F8A",
  ACCENT_LIGHT: "#3A7AB5",
  WHITE: "#FFFFFF",
  SURFACE_MUTED: "#F8F9FA",
  TEXT_PRIMARY: "#1B3A5C",
  TEXT_SECONDARY: "#4A5568",
  TEXT_LIGHT: "#718096",
  BORDER: "#E2E8F0",
} as const;

export const TOTAL_PAGES = 14;
