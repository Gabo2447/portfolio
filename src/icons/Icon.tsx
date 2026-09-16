import { icons } from "lucide-react";
import type { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name?: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  if (name == null || name == undefined) {
    return;
  }

  const pascalName = name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("") as keyof typeof icons;

  const IconComponent = icons[pascalName];

  if (!IconComponent) return null;

  return <IconComponent {...props} />;
}
