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
function App() {
  return (
    <>
      <main className="p-4 py-16 mx-auto w-full max-w-3xl">
        {/* About */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 items-center">
          <div className="flex-shrink">
            <h1 className="text-foreground">Hello!</h1>
            <p className="text-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis veritatis vel error ullam ea eveniet tenetur aliquam, quos optio harum iure. Repudiandae nihil soluta beatae pariatur dolores nobis vero dolore necessitatibus fugit libero numquam quis, adipisci dolorem fuga vitae provident quae maiores expedita nostrum dignissimos voluptas, cupiditate quos. Quos?
            </p>
          </div>
          <div className="flex-shrink-0 h-28 w-28">
            <Image src="icon.png" alt="Icon"/>
          </div>
        </div>
        <div className="mt-2 flex flex-row gap-4">
          <Button>buttons</Button>
          <Button>buttons</Button>
          <Button>buttons</Button>
        </div>

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