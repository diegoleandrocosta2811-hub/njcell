import type { ReactNode } from "react";

type VisuallyHiddenProps = {
  children: ReactNode;
  as?: "span" | "p";
};

export default function VisuallyHidden({
  children,
  as: Tag = "span",
}: VisuallyHiddenProps) {
  return <Tag className="sr-only">{children}</Tag>;
}
