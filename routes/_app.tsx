/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

import Navbar from "../islands/Navbar.tsx";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <meta name="title" content="Perfect Albums" />
        <meta name="description" content="The best music on the net." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Perfect Albums</title>
        <link rel="icon" href="https://fav.farm/🍋" />
      </Head>
      <body class={tw`h-full dark:bg-gray-800`}>
        <Navbar />
        <props.Component />
      </body>
    </>
  );
}
