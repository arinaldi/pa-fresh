/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import { formatFavorites, sortDesc } from "../utils/index.ts";
import { SPOTIFY_URL } from "../utils/constants.ts";
import { supabase } from "../utils/supabase.ts";
import Layout from "../components/Layout.tsx";

export interface Album {
  id: number;
  created_at: string;
  artist: string;
  title: string;
  year: string;
  cd: boolean;
  favorite: boolean;
  studio: boolean;
}

async function getFavorites() {
  const { data: favorites, error } = await supabase
    .from<Album>("albums")
    .select("*")
    .eq("favorite", true)
    .order("artist", { ascending: true });

  if (error) throw error;
  if (favorites) return favorites;
  return [];
}

export const handler: Handlers<Album[]> = {
  async GET(_, ctx) {
    const favorites = await getFavorites();

    return ctx.render(favorites);
  },
};

export default function TopAlbums({ data: favorites }: PageProps<Album[]>) {
  return (
    <Layout
      title={
        <span>
          Top Albums
          <span
            class={tw`ml-3 rounded-md bg-gray-100 p-1 text-xl font-semibold dark:bg-gray-700 sm:text-2xl`}
          >
            {favorites.length.toLocaleString()}
          </span>
        </span>
      }
    >
      <div
        class={tw`grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {Object.entries(formatFavorites(favorites))
          .sort(sortDesc)
          .map(([year, data]) => (
            <div key={year}>
              <div class={tw`flex items-center justify-between`}>
                <h4
                  id={year}
                  class={tw`text-xl font-semibold dark:text-white`}
                >
                  {year}
                </h4>
                <div
                  class={tw`mr-4 rounded-md bg-gray-100 px-2 py-1 text-xl font-semibold dark:bg-gray-700 dark:text-white`}
                >
                  {data.length.toLocaleString()}
                </div>
              </div>
              <ul class={tw`ml-6 list-disc p-1`}>
                {data.map(({ artist, title }, index) => {
                  const query = encodeURI(`${artist} ${title}`);
                  const url = `${SPOTIFY_URL}/${query}`;

                  return (
                    <li key={index} class={tw`dark:text-white`}>
                      {artist} &ndash;{" "}
                      <a
                        class={tw`text-blue-700 hover:underline dark:text-blue-500`}
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
      </div>
    </Layout>
  );
}
