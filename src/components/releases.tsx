import * as React from "react"

import Autoplay from "embla-carousel-autoplay"
import Image from "@/components/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Releases() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      console.log("current")
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (<>
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-2/3">
            <div className="p-1">
            <AlertDialog>

              <AlertDialogTrigger className="w-full">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <AspectRatio ratio={1}>
                      <Image src="test.png" alt="test"/>
                    </AspectRatio>
                  </CardContent>
                </Card>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AspectRatio ratio={21 / 9}>
                    <Image src="test.png" alt="test"/>
                  </AspectRatio>
                  <Card>
                    <CardHeader>
                      <CardTitle>Song Name (feat. Someone)</CardTitle>
                      <CardDescription>Feb 30, 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>short desc</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sapiente saepe ab quisquam exercitationem obcaecati, tenetur dolores enim impedit perspiciatis assumenda quibusdam amet, nobis laboriosam?</p>
                    </CardContent>
                  </Card>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    onClick={() => {
                      alert("mp3")
                    }}
                  >.mp3</AlertDialogCancel>
                  <AlertDialogCancel
                    onClick={() => {
                      alert("png")
                    }}
                  >.png</AlertDialogCancel>
                  <AlertDialogAction>OK</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>

            </AlertDialog>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="py-2 text-center text-sm text-muted-foreground">
      { current === 1 ? "Latest Release" : `${current} of ${count}` }: put song name here
    </div>
  </>)
}