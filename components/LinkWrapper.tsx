/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

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
      class={tw`${isActive ? "text-white" : "text-gray-300"} ${
        classNames || ""
      } rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800`}
      href={href}
      key={href}
      onClick={onClick}
    >
      <span class={tw`${isActive ? "border-b-2" : ""} pb-1`}>{children}</span>
    </a>
  );
}
