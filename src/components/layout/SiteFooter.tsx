import { HTMLAttributes } from "react";
import { Container } from "./Container";
import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

const footerBorder = style({
  borderTop: `1px solid ${vars.color.border}`,
});

export interface SiteFooterProps extends HTMLAttributes<HTMLElement> {}

export function SiteFooter({ className, children, ...props }: SiteFooterProps) {
  return (
    <footer
      className={`${sprinkles({
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: "surface",
        color: "muted",
      })} ${footerBorder} ${className || ""}`}
      {...props}
    >
      <Container>{children}</Container>
    </footer>
  );
}
