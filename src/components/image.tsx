import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Image({ src, alt }: { src: string; alt: string }) {
    const [isImageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            {!isImageLoaded && <Skeleton className="w-full h-full rounded-md"/>}
            <img
                src={src}
                alt={alt}
                className="rounded-md object-cover w-full h-full"
                style={{ display: isImageLoaded ? 'block' : 'none' }}
                onLoad={() => setImageLoaded(true)}
            />
        </>
    );
}