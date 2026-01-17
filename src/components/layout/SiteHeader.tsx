import { HTMLAttributes } from "react";
import { Container } from "./Container";
import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

const headerBorder = style({
  borderBottom: `1px solid ${vars.color.border}`,
});

export interface SiteHeaderProps extends HTMLAttributes<HTMLElement> {}

export function SiteHeader({ className, children, ...props }: SiteHeaderProps) {
  return (
    <header
      className={`${sprinkles({
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: "surface",
      })} ${headerBorder} ${className || ""}`}
      {...props}
    >
      <Container>{children}</Container>
    </header>
  );
}
