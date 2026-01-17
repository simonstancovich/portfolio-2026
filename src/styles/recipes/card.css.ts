import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";

export const card = recipe({
  base: {
    backgroundColor: vars.color.surface,
    borderRadius: vars.radius.lg,
    border: `1px solid ${vars.color.border}`,
    overflow: "hidden",
    transition: "all 0.2s ease",
  },
  variants: {
    padding: {
      none: {
        padding: 0,
      },
      sm: {
        padding: vars.space[3],
      },
      md: {
        padding: vars.space[4],
      },
      lg: {
        padding: vars.space[6],
      },
    },
    elevation: {
      flat: {
        boxShadow: "none",
      },
      raised: {
        boxShadow: vars.shadow.sm,
        ":hover": {
          boxShadow: vars.shadow.md,
        },
      },
      floating: {
        boxShadow: vars.shadow.lg,
      },
    },
  },
  defaultVariants: {
    padding: "md",
    elevation: "flat",
  },
});
