import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html, body", {
  padding: 0,
  margin: 0,
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.sans,
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("::selection", {
  background: vars.color.accent,
  color: "#0B0D10",
});

globalStyle(":focus-visible", {
  outline: `2px solid ${vars.color.accent2}`,
  outlineOffset: "3px",
});

globalStyle("p", {
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.muted,
});
