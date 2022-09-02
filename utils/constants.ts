export enum ROUTE_HREF {
  TOP_ALBUMS = "/albums",
  FEATURED_SONGS = "/songs",
  NEW_RELEASES = "/releases",
  SIGNIN = "/signin",
  SIGNOUT = "/signout",
}

export const ROUTES = [
  { href: ROUTE_HREF.TOP_ALBUMS, label: "Top Albums" },
  { href: ROUTE_HREF.FEATURED_SONGS, label: "Featured Songs" },
  { href: ROUTE_HREF.NEW_RELEASES, label: "New Releases" },
];

export const SPOTIFY_URL = "https://open.spotify.com/search";
