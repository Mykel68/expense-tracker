import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarToggleProps {
    isOpen: boolean | undefined;
    setIsOpen?: () => void;
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
    return (
        <div className="invisible lg:visible absolute top-[12px] -right-[16px] z-20 bg-white dark:bg-primary-foreground rounded-xl">
            <Button
                onClick={() => setIsOpen?.()}
                className="rounded-xl w-8 h-8"
                variant="outline"
                size="icon"
            >
                <ChevronLeft
                    className={cn(
                        "h-4 w-4 transition-transform ease-in-out duration-700   text-purple-600 hover:text-purple-800 hover:font-bold",
                        isOpen === false ? "rotate-180" : "rotate-0"
                    )}
                />
            </Button>
        </div>
    );
}