import { HTMLAttributes, forwardRef } from "react";
import { container } from "@/styles/recipes/layout.css";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`${container} ${className || ""}`} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
