import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const container = style({
  width: "100%",
  maxWidth: "1280px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: vars.space[4],
  paddingRight: vars.space[4],
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: vars.space[6],
      paddingRight: vars.space[6],
    },
  },
});

export const stack = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[4],
});

export const row = style({
  display: "flex",
  flexDirection: "row",
  gap: vars.space[4],
});

export const grid = style({
  display: "grid",
  gap: vars.space[4],
});
