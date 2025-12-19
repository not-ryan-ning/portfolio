"use client";

interface ShinyUnderlineProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const ShinyUnderline = ({
  text,
  delay = 0,
  speed = 3,
  className = "",
}: ShinyUnderlineProps) => {
  const delayClass =
    delay > 0 ? `shiny-underline-delay-${delay}` : "shiny-underline-delay-0";

  return (
    <span className={`shiny-underline ${delayClass} ${className}`}>{text}</span>
  );
};

export default ShinyUnderline;
