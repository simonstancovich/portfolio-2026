import { HTMLAttributes, forwardRef } from "react";
import { card } from "@/styles/recipes/card.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg";
  elevation?: "flat" | "raised" | "floating";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ padding, elevation, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${card({ padding, elevation })} ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
