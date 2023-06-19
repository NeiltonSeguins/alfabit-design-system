import React from "react";

export type TypographProps = {
  variant?: string;
  size?: string;
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
};

const Typograph = ({
  variant = "",
  size = "",
  children,
  element = "p",
}: TypographProps) => {
  const Element = element;
  return <Element>{children}</Element>;
};

export default Typograph;
