import Releases from "@/components/releases"
import Link from "@/components/link"
import Image from "@/components/image"

import { ThemeProvider } from "@/components/theme-provider"
import { Separator } from "@/components/ui/separator"
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
import IconEmail from "~icons/lucide/mail"

function App() {
  let age = Math.abs(new Date(Date.now() - new Date("2007-09-04").getTime()).getUTCFullYear() - 1970)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="p-4 py-16 mx-auto w-full max-w-3xl">
        {/* About */}
        <div className="flex flex-col-reverse sm:flex-row gap-8 items-center">
          <div className="flex-grow">
            <h1>Hello!</h1>
            <p>
              Musician, Artist and Programmer. I'm currently {age} years old and making stuff in my living room.
            </p>
          </div>
          <div className="flex-shrink-0 h-28 w-28">
            <Image src="icon.png" alt="Icon"/>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Link
            href="https://www.youtube.com/@azur1s"
          ><IconYoutube className="w-5 h-5 text-foreground/50"/></Link>
          <Link
            href="https://open.spotify.com/artist/1LtCIFOZ7dh57qLWCFGtUm"
          ><IconSpotify className="w-5 h-5 text-foreground/50"/></Link>
          <Link
            href="https://soundcloud.com/azur1s"
          ><IconSoundcloud className="w-5 h-5 text-foreground/50" /></Link>
          <Link
            href="https://www.artstation.com/azur1s"
          ><IconArtStation className="w-5 h-5 text-foreground/50" /></Link>
          <Link
            href="https://github.com/azur1s"
          ><IconGithub className="w-5 h-5 text-foreground/50" /></Link>
          <Link
            href="mailto:contact@azur.moe"
          ><IconEmail className="w-5 h-5 text-foreground/50"/></Link>
        </div>

        <Separator className="my-8" />

        {/* Releases & Artworks */}
        {/* <h2 className="text-foreground">Releases & Artworks</h2> */}
        {/* <p className="pb-4">Click inside for more info!</p> */}
        {/* <Releases /> */}
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