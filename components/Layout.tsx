/** @jsx h */
import { ComponentChildren, h, VNode } from "preact";
import { tw } from "@twind";

interface Props {
  children: ComponentChildren;
  maxWidth?: string;
  title: VNode;
  titleAction?: VNode;
}

export default function Layout({
  children,
  maxWidth,
  title,
  titleAction,
}: Props) {
  return (
    <div class={tw`mx-auto p-4 ${maxWidth ?? "max-w-7xl"}`}>
      <div class={tw`mb-4 flex items-center justify-between`}>
        <h1 class={tw`text-2xl font-semibold dark:text-white sm:text-3xl`}>
          {title}
        </h1>
        {titleAction}
      </div>
      <main class={tw`relative flex-auto`}>{children}</main>
    </div>
  );
}
