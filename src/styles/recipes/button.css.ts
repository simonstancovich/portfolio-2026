import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none",
    textDecoration: "none",
    fontFamily: vars.font.sans,
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.accent,
        color: vars.color.bg,
        ":hover": {
          backgroundColor: vars.color.accent2,
        },
      },
      secondary: {
        backgroundColor: vars.color.surface,
        color: vars.color.text,
        border: `1px solid ${vars.color.border}`,
        ":hover": {
          backgroundColor: vars.color.surface2,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: vars.color.text,
        ":hover": {
          backgroundColor: vars.color.surface,
        },
      },
    },
    size: {
      sm: {
        padding: `${vars.space[2]} ${vars.space[3]}`,
        fontSize: vars.fontSize.sm,
        borderRadius: vars.radius.sm,
      },
      md: {
        padding: `${vars.space[3]} ${vars.space[5]}`,
        fontSize: vars.fontSize.md,
        borderRadius: vars.radius.md,
      },
      lg: {
        padding: `${vars.space[4]} ${vars.space[6]}`,
        fontSize: vars.fontSize.lg,
        borderRadius: vars.radius.lg,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
