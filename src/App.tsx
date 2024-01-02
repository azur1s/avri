import Releases from "@/components/releases"
import Image from "@/components/image"

import { Button } from "@/components/ui/button"
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

function App() {
  let age = Math.abs(new Date(Date.now() - new Date("2007-09-04").getTime()).getUTCFullYear() - 1970)

  return (
    <>
      <main className="p-4 py-16 mx-auto w-full max-w-3xl">
        {/* About */}
        <div className="flex flex-col-reverse sm:flex-row gap-8 items-center">
          <div className="flex-grow">
            <h1 className="text-foreground">Hello!</h1>
            <p className="text-foreground">
              Musician, Artist and Programmer. I'm currently {age} years old and making stuff in my living room.
            </p>
          </div>
          <div className="flex-shrink-0 h-28 w-28">
            <Image src="icon.png" alt="Icon"/>
          </div>
        </div>
        <div className="mt-2 flex flex-row gap-2">
          <a
            className="text-primary-background border-2 border-foreground/25 p-2 rounded-md hover:bg-foreground/10 transition-colors duration-250"
            href="https://www.youtube.com/@azur1s"
            target="_blank"
            rel="noopener noreferrer"
          ><IconYoutube className="w-6 h-6"/></a>
          <a
            className="text-primary-background border-2 border-foreground/25 p-2 rounded-md hover:bg-foreground/10 transition-colors duration-250"
            href="https://open.spotify.com/artist/1LtCIFOZ7dh57qLWCFGtUm"
            target="_blank"
            rel="noopener noreferrer"
          ><IconSpotify className="w-6 h-6"/></a>
          <a
            className="text-primary-background border-2 border-foreground/25 p-2 rounded-md hover:bg-foreground/10 transition-colors duration-250"
            href="https://soundcloud.com/azur1s"
            target="_blank"
            rel="noopener noreferrer"
          ><IconSoundcloud className="w-6 h-6" /></a>
          <a
            className="text-primary-background border-2 border-foreground/25 p-2 rounded-md hover:bg-foreground/10 transition-colors duration-250"
            href="https://www.artstation.com/azur1s"
            target="_blank"
            rel="noopener noreferrer"
          ><IconArtStation className="w-6 h-6" /></a>
          <a
            className="text-primary-background border-2 border-foreground/25 p-2 rounded-md hover:bg-foreground/10 transition-colors duration-250"
            href="https://github.com/azur1s"
            target="_blank"
            rel="noopener noreferrer"
          ><IconGithub className="w-6 h-6" /></a>
        </div>

        <h3 className="mt-8">GUYS my web site not finish please do not look below</h3>
        <p>just click the links lmao</p>

        <Separator className="my-8" />

        {/* Releases & Artworks */}
        <h2 className="text-foreground">Releases & Artworks</h2>
        <p className="pb-4">Click inside for more info!</p>
        <Releases />
        <Releases />

        <Separator className="my-8" />

        {/* FAQs */}
        <h2 className="text-foreground">FAQs</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">on god</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium explicabo impedit in nihil, cumque dolorum quod quisquam ab mollitia consequuntur voluptas odio temporibus optio sequi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">wait can i add image</AccordionTrigger>
            <AccordionContent>
              <img src="FIRE_IN_THE_HOLE.jpg" className="w-full" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  )
}

export default App