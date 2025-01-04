import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/form/login"
import { Icons } from "../../../public/svg/Icons"
import Image from "next/image"

export default function LoginPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center background gap-6 bg-muted p-5 ">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        {/* <GalleryVerticalEnd className="size-4" /> */}
                        <Image
                            src="/logo.png"
                            width={1000}
                            height={1000}
                            className="size-4"
                            alt="logo"
                        />
                    </div>
                    Acme Inc.
                </a>
                <LoginForm />
            </div>
        </div>



        // <Icons.background className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10" >
        //     <div className="flex w-full max-w-sm flex-col gap-6">
        //         <a href="#" className="flex items-center gap-2 self-center font-medium">
        //             <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
        //                 <GalleryVerticalEnd className="size-4" />
        //             </div>
        //             Acme Inc.
        //         </a>
        //         <LoginForm />
        //     </div>
        // </Icons.background>
    )
}
