import Link from "next/link";

export function Footer() {
    return (
        <div className="supports-backdrop-blur:bg-background/60 z-20 w-full shadow bg-gray-200 backdrop-blur ">
            <div className="mx-4 md:mx-8 flex h-14 items-center justify-center">
                <p className="text-xs md:text-sm leading-loose text-muted-foreground text-center">
                    Institute of Digital Humanities
                </p>
            </div>
        </div>
    );
}