
import React, { JSX } from 'react';
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

/**
 * GlassCard Component
 * 
 * A reusable component that applies a frosted glass effect to its content.
 * Works well with the sunset mountain background to create a modern UI effect.
 * 
 * @param {React.ReactNode} children - The content to display inside the card
 * @param {React.ElementType} as - The HTML element to render (default: section)
 * @param {string} className - Additional CSS classes to apply
 * @returns {JSX.Element} A frosted glass card component
 */
const GlassCard = ({ 
  children, 
  as: Component = 'section', 
  className, 
  ...props 
}: GlassCardProps): JSX.Element => {
  return (
    <Component 
      className={cn("card p-4", className)} 
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;