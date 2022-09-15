import { Handlers, PageProps } from "$fresh/server.ts";

import { formatReleases, sortByDate } from "../utils/index.ts";
import { supabase } from "../utils/supabase.ts";
import Layout from "../components/Layout.tsx";

export interface Release {
  id: number;
  created_at: string;
  artist: string;
  title: string;
  date: string | null;
}

async function getReleases() {
  const { data: releases, error } = await supabase
    .from<Release>("releases")
    .select("*")
    .order("artist", { ascending: true });

  if (error) throw error;
  if (releases) return releases;
  return [];
}

export const handler: Handlers<Release[]> = {
  async GET(_, ctx) {
    const releases = await getReleases();

    return ctx.render(releases);
  },
};

export default function NewReleases({ data: releases }: PageProps<Release[]>) {
  return (
    <Layout title={<span>New Releases</span>}>
      <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(formatReleases(releases))
          .sort(sortByDate)
          .map(([date, data]) => (
            <div key={date}>
              <h4 class="text-xl font-semibold dark:text-white">{date}</h4>
              <ul class="ml-6 list-disc p-1">
                {data.map((release) => (
                  <li key={release.id} class="dark:text-white">
                    <span>
                      {release.artist} &ndash; {release.title}
                    </span>
                    {
                      /* {user && (
                      <>
                        <PencilIcon
                          className="ml-2 inline h-4 w-4 cursor-pointer dark:text-white"
                          onClick={() =>
                            onOpen({
                              data: release,
                              type: MODAL_TYPES.EDIT,
                            })
                          }
                        />
                        <TrashIcon
                          className="ml-2 inline h-4 w-4 cursor-pointer dark:text-white"
                          onClick={() =>
                            onOpen({
                              data: release,
                              type: MODAL_TYPES.DELETE,
                            })
                          }
                        />
                      </>
                    )} */
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </Layout>
  );
}
