import React from "react";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";

export default function UserItem({ name, email, fallback, isOpen }) {
    return isOpen || isOpen === undefined ? (
        <div className="flex item-center justify-between gap-2 border-2 border-purple-900 rounded-[8px] p-4">
            <div className="avatar rounded-full min-h-12 min-w-12 bg-purple-800 text-white flex items-center justify-center">
                <p>{fallback}</p>
            </div>
            <div className="grow">
                <div className="text-[16px] font-bold">{name}</div>
                <div className="truncate text-neutral-500">{email}</div>
            </div>
        </div>
    ) : (
        <div className="avatar rounded-full min-h-12 min-w-12 bg-purple-800 text-white flex items-center justify-center">
            <TooltipProvider>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger className="w-full">
                        <div className="w-full flex justify-center items-center ">
                            <div className="avatar rounded-full  bg-purple-800 text-white flex items-center justify-center">
                                <p>{fallback}</p>
                            </div>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>{name}</p>
                        <p>{email}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}