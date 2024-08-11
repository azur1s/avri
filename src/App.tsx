import Links from "@/components/links"
import Releases from "@/components/releases"
import Link from "@/components/link"
import Image from "@/components/image"

import { ThemeProvider } from "@/components/theme-provider"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import IconYoutube from "~icons/carbon/logo-youtube"
import IconSpotify from "~icons/mdi/spotify"
import IconSoundcloud from "~icons/mdi/soundcloud"
import IconArtStation from "~icons/mdi/artstation"
import IconGithub from "~icons/carbon/logo-github"
import IconKofi from "~icons/simple-icons/kofi"
import IconEmail from "~icons/lucide/mail"
import IconCalendar from "~icons/lucide/calendar-heart"

function App() {
  let age = new Date().getFullYear() - 2007

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="p-4 py-16 mx-auto w-full max-w-3xl">
        {/* About */}
        <div className="flex flex-col-reverse sm:flex-row gap-8 items-center">
          <div className="flex-grow">
            <h1>Hello!</h1>
            <p>
              Musician, Artist and Programmer. I'm currently
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="px-[0.5ch] underline hover:text-foreground transition">{age} years old</TooltipTrigger>
                  <TooltipContent className="flex flex-row text-muted-foreground gap-2">
                    <IconCalendar /><p>9 April, 2007</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              and making stuff in my living room.
            </p>
          </div>
          <div className="flex-shrink-0 h-28 w-28">
            <Image src="icon.png" alt="Icon"/>
          </div>
        </div>

        <Separator className="my-8" />

        <h2>Redirects</h2>
        <div className="flex justify-center">
          <Links />
        </div>

        <Separator className="my-8" />

        {/* Releases & Artworks */}
        {/* <h2 className="text-foreground">Releases & Artworks</h2> */}
        {/* <p className="pb-4">Click inside for more info!</p> */}
        {/* <Releases /> */}

        {/* <Separator className="my-8" /> */}

        {/* FAQs */}
        <h2 className="text-foreground">FAQs</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">is this finish</AccordionTrigger>
            <AccordionContent>
              <p>no</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">r</AccordionTrigger>
            <AccordionContent>
              <img src="FIRE_IN_THE_HOLE.jpg" className="w-full" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </ThemeProvider>
  )
}

export default App