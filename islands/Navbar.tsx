/** @jsx h */
import { h } from "preact";
import { useReducer } from "preact/hooks";
import { tw } from "@twind";

import LinkWrapper from "../components/LinkWrapper.tsx";
import MenuIcon from "../icons/MenuIcon.tsx";
import XIcon from "../icons/XIcon.tsx";
import { ROUTES } from "../utils/constants.ts";

export default function Navbar() {
  const [open, toggle] = useReducer(
    (flag: boolean, next: boolean | null) => (next == null ? !flag : next),
    false,
  );

  return (
    <nav class={tw`bg-gray-800 dark:bg-gray-700`}>
      <div class={tw`mx-auto px-2 sm:px-6 lg:px-8`}>
        <div class={tw`relative flex h-16 items-center justify-between`}>
          <div class={tw`flex items-center sm:hidden`}>
            <button
              class={tw`inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              aria-expanded="false"
              onClick={() => toggle(null)}
              type="button"
            >
              <span class={tw`sr-only`}>Open main menu</span>
              <MenuIcon className={`${open ? "hidden" : "block"} h-6 w-6`} />
              <XIcon className={`${open ? "block" : "hidden"} h-6 w-6`} />
            </button>
          </div>
          <div
            class={tw`flex flex-1 items-center justify-center sm:items-stretch sm:justify-start`}
          >
            <div class={tw`flex flex-shrink-0 items-center`}>
              <span class={tw`text-xl font-semibold text-white`}>
                Perfect Albums
              </span>
            </div>
            <div class={tw`hidden sm:ml-6 sm:block`}>
              <div class={tw`flex`}>
                {ROUTES.map(({ href, label }) => (
                  <LinkWrapper key={href} href={href}>
                    {label}
                  </LinkWrapper>
                ))}
                {
                  /* {user ? (
                  <LinkWrapper href={ROUTES_ADMIN.base.href}>
                    {ROUTES_ADMIN.base.label}
                  </LinkWrapper>
                ) : null} */
                }
              </div>
            </div>
          </div>
          {
            /* <button
            class={tw`rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            aria-expanded="false"
            onClick={toggleDarkMode}
            type="button"
          >
            <span className="sr-only">Toggle dark mode</span>
            {isDarkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button> */
          }
          {
            /* <div class={tw`absolute inset-y-0 right-0 hidden pr-2 sm:static sm:inset-auto sm:ml-0 sm:flex sm:items-center sm:pr-0`}>
            {user ? (
              <LinkWrapper href={ROUTE_HREF.SIGNOUT}>
                <LogoutIcon className="h-5 w-5" />
              </LinkWrapper>
            ) : (
              <LinkWrapper href={ROUTE_HREF.SIGNIN}>
                <LoginIcon className="h-5 w-5" />
              </LinkWrapper>
            )}
          </div> */
          }
        </div>
      </div>

      {/* Mobile menu */}
      <div class={tw`${open ? "block" : "hidden"} sm:hidden`}>
        <div class={tw`space-y-1 px-2 pt-2 pb-3`}>
          {ROUTES.map(({ href, label }) => (
            <LinkWrapper
              key={href}
              classNames="block text-base"
              href={href}
              onClick={() => toggle(false)}
            >
              {label}
            </LinkWrapper>
          ))}
          {
            /* {user ? (
            <>
              <LinkWrapper
                classNames="block text-base"
                href={ROUTES_ADMIN.base.href}
                onClick={() => toggle(false)}
              >
                {ROUTES_ADMIN.base.label}
              </LinkWrapper>
              <LinkWrapper
                classNames="block text-base"
                href={ROUTE_HREF.SIGNOUT}
                onClick={() => toggle(false)}
              >
                Sign Out
              </LinkWrapper>
            </>
          ) : (
            <LinkWrapper
              classNames="block text-base"
              href={ROUTE_HREF.SIGNIN}
              onClick={() => toggle(false)}
            >
              Sign In
            </LinkWrapper>
          )} */
          }
        </div>
      </div>
    </nav>
  );
}
