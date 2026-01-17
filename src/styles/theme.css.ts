import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    bg: null,
    surface: null,
    surface2: null,
    text: null,
    muted: null,
    border: null,
    accent: null,
    accent2: null,
    danger: null,
  },
  space: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    pill: null,
  },
  shadow: {
    sm: null,
    md: null,
    lg: null,
  },
  font: {
    sans: null,
    mono: null,
  },
  fontSize: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    "2xl": null,
    "3xl": null,
    "4xl": null,
  },
  lineHeight: {
    tight: null,
    snug: null,
    normal: null,
    relaxed: null,
  },
});

export const [themeClass, themeVars] = createTheme(vars, {
  color: {
    bg: "#0B0D10",
    surface: "rgba(255,255,255,0.06)",
    surface2: "rgba(255,255,255,0.09)",
    text: "rgba(255,255,255,0.92)",
    muted: "rgba(255,255,255,0.70)",
    border: "rgba(255,255,255,0.12)",
    accent: "#7C5CFF",   // premium violet
    accent2: "#42D3FF",  // cool cyan highlight
    danger: "#FF4D4D",
  },
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "32px",
    8: "40px",
    9: "56px",
  },
  radius: {
    sm: "10px",
    md: "14px",
    lg: "18px",
    xl: "24px",
    pill: "999px",
  },
  shadow: {
    sm: "0 8px 24px rgba(0,0,0,0.25)",
    md: "0 16px 48px rgba(0,0,0,0.35)",
    lg: "0 24px 80px rgba(0,0,0,0.45)",
  },
  font: {
    sans:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
    mono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace',
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "22px",
    "2xl": "28px",
    "3xl": "36px",
    "4xl": "48px",
  },
  lineHeight: {
    tight: "1.1",
    snug: "1.25",
    normal: "1.45",
    relaxed: "1.7",
  },
});
