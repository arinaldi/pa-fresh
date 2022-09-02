/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import { supabase } from "../utils/supabase.ts";
import Layout from "../components/Layout.tsx";

export interface Song {
  id: number;
  created_at: string;
  artist: string;
  title: string;
  link: string;
}

async function getSongs() {
  const { data: songs, error } = await supabase
    .from<Song>("songs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  if (songs) return songs;
  return [];
}

export const handler: Handlers<Song[]> = {
  async GET(_, ctx) {
    const songs = await getSongs();

    return ctx.render(songs);
  },
};

export default function FeaturedSongs({ data: songs }: PageProps<Song[]>) {
  return (
    <Layout title={<span>Featured Songs</span>}>
      <div
        class={tw`grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {songs.map((song) => (
          <div
            class={tw`rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-black dark:bg-gray-700`}
            key={song.id}
          >
            <div class={tw`mb-1 text-xl font-semibold dark:text-white`}>
              {song.title}
            </div>
            <div className={tw`mb-2 text-gray-500 dark:text-white`}>
              {song.artist}
            </div>
            <div>
              <a
                className={tw`text-blue-700 hover:underline dark:text-blue-500`}
                href={song.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                Listen
              </a>
              {
                /* {user
              ? (
                <span
                  className="ml-2 cursor-pointer dark:text-white"
                  onClick={() =>
                    onOpen({ data: song, type: MODAL_TYPES.DELETE })}
                >
                  <TrashIcon className="inline h-4 w-4" />
                </span>
              )
              : null} */
              }
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
