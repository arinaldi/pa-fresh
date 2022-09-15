import { ComponentChildren, VNode } from "preact";

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
    <div class={`mx-auto p-4 ${maxWidth ?? "max-w-7xl"}`}>
      <div class="mb-4 flex items-center justify-between">
        <h1 class="text-2xl font-semibold dark:text-white sm:text-3xl">
          {title}
        </h1>
        {titleAction}
      </div>
      <main class="relative flex-auto">{children}</main>
    </div>
  );
}
