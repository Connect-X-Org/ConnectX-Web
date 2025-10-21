import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
      <NavigationMenu.List className="center m-0 flex list-none rounded-md p-1 shadow-md">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 font-medium text-[15px] text-violet11 leading-none outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
            Learn{" "}
            <ChevronDownIcon
              aria-hidden
              className="group-data-[state=open]:-rotate-180 relative top-px text-violet10 transition-transform duration-[250] ease-in"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full bg-blue-400 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                    href="/"
                  >
                    <svg
                      aria-hidden
                      fill="white"
                      height="38"
                      viewBox="0 0 25 25"
                      width="38"
                    >
                      <title>Radix Logo</title>
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" />
                      <path d="M12 0H4V8H12V0Z" />
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" />
                    </svg>
                    <div className="mt-4 mb-[7px] font-medium text-[18px] leading-[1.2]">
                      Radix Primitives
                    </div>
                    <p className="text-[14px] text-mauve4 leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 font-medium text-[15px] text-violet11 leading-none outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
            Overview{" "}
            <ChevronDownIcon
              aria-hidden
              className="group-data-[state=open]:-rotate-180 relative top-px text-violet10 transition-transform duration-[250] ease-in"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem
                href="/primitives/docs/overview/introduction"
                title="Introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                href="/primitives/docs/overview/getting-started"
                title="Getting started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem href="/primitives/docs/guides/styling" title="Styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                href="/primitives/docs/guides/animation"
                title="Animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                href="/primitives/docs/overview/accessibility"
                title="Accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                href="/primitives/docs/overview/releases"
                title="Releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded px-3 py-2 font-medium text-[15px] text-violet11 leading-none no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden bg-blue-400 transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={cn(
            "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium text-violet12 leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;
