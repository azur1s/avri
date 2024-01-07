"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import IconMusic from "~icons/lucide/music"
import IconArt from "~icons/lucide/drafting-compass"
import IconCode from "~icons/lucide/code-2"
import IconSupport from "~icons/lucide/heart-handshake"
import IconYoutube from "~icons/carbon/logo-youtube"
import IconSpotify from "~icons/mdi/spotify"
import IconArtStation from "~icons/mdi/artstation"
import IconKofi from "~icons/simple-icons/kofi"
import IconEmail from "~icons/lucide/mail"

export default function Links() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex flex-row gap-1">
            <IconMusic />
            Music
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Listen to my music!
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Watch my music video & stream my music on Youtube, Spotify, and more!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="https://www.youtube.com/@azur1s"
                target="_blank" rel="noopener noreferrer"
                title="Youtube"
              >
                <div className="flex flex-row gap-1">
                  <IconYoutube className="w-5 h-5 text-muted-foreground" />
                  Watch my music videos on Youtube.
                </div>
              </ListItem>
              <ListItem
                href="https://open.spotify.com/artist/1LtCIFOZ7dh57qLWCFGtUm"
                target="_blank" rel="noopener noreferrer"
                title="Spotify"
              >
                <div className="flex flex-row gap-1">
                  <IconSpotify className="w-5 h-5 text-muted-foreground" />
                  Stream my music on  Spotify.
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex flex-row gap-1">
            <IconArt />
            Art
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      See my artwork!
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Take a look & download my artwork on ArtStation.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="https://www.artstation.com/azur1s"
                target="_blank" rel="noopener noreferrer"
                title="ArtStation"
              >
                <div className="flex flex-row gap-1">
                  <IconArtStation className="w-5 h-5 text-muted-foreground" />
                  See & download my artwork on  ArtStation.
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex flex-row gap-1">
            <IconCode />
            Code
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      View my projects!
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Take a look & contribute to my open-source projects on Github.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="https://github.com/azur1s"
                target="_blank" rel="noopener noreferrer"
                title="Github"
              >
                <div className="flex flex-row gap-1">
                  Take a look & contribute to my open-source projects on Github.
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex flex-row gap-1">
            <IconSupport />
            Contact & Support
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Say hi & support me!
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Contact me via email or support me with Ko-fi.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="mailto:contact@azur.moe"
                target="_blank" rel="noopener noreferrer"
                title="Email"
              >
                <div className="flex flex-row gap-1">
                  <IconEmail className="w-5 h-5 text-muted-foreground" />
                  Contact me at via  email.
                </div>
              </ListItem>
              <ListItem
                href="https://www.ko-fi.com/azur1s"
                target="_blank" rel="noopener noreferrer"
                title="Ko-fi"
              >
                <div className="flex flex-row gap-1">
                  <IconKofi className="w-5 h-5 text-muted-foreground" />
                  Support me on Ko-fi.
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
