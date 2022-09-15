import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  classNames?: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function LinkWrapper({
  children,
  classNames,
  href,
  isActive,
  onClick,
}: Props) {
  return (
    <a
      class={`${isActive ? "text-white" : "text-gray-300"} ${
        classNames || ""
      } rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800`}
      href={href}
      key={href}
      onClick={onClick}
    >
      <span class={`${isActive ? "border-b-2" : ""} pb-1`}>{children}</span>
    </a>
  );
}
