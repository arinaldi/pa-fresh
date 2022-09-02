/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Perfect Albums</title>
        <link rel="icon" href="https://fav.farm/🍋" />
      </Head>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <img
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6`}>
          Hello world, and welcome to `fresh`.
        </p>
        <Counter start={3} />
      </div>
    </Fragment>
  );
}
