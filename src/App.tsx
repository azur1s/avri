import Releases from "@/components/releases"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
function App() {
  return (
    <>
      <main className="p-4 py-16 mx-auto w-full max-w-3xl">
        {/* About */}
        <p className="text-foreground text-4xl font-bold">Hello!</p>
        <p className="text-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis veritatis vel error ullam ea eveniet tenetur aliquam, quos optio harum iure. Repudiandae nihil soluta beatae pariatur dolores nobis vero dolore necessitatibus fugit libero numquam quis, adipisci dolorem fuga vitae provident quae maiores expedita nostrum dignissimos voluptas, cupiditate quos. Quos?
        </p>
        <p className="mt-4 text-foreground text-xl font-bold">Music Links</p>
        todo: change to icon + color
        <div className="mt-2 flex flex-row gap-4">
          <Button>Youtube</Button>
          <Button>Spotify</Button>
          <Button>Soundcloud</Button>
          <Button>ArtStation</Button>
          <Button>Github</Button>
        </div>

        <Separator className="my-8" />

        {/* Releases & Artworks */}
        <p className="text-foreground text-3xl font-bold">Releases & Artworks</p>
        <p className="pb-4">Click inside for more info!</p>
        <Releases />
        <Releases />

        <Separator className="my-8" />

        {/* FAQs */}
        <p className="text-foreground text-3xl font-bold">FAQs</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>on god</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium explicabo impedit in nihil, cumque dolorum quod quisquam ab mollitia consequuntur voluptas odio temporibus optio sequi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>wait can i add image</AccordionTrigger>
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