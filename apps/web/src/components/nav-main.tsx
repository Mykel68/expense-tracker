"use client"

import { ChevronRight, LucideIcon } from 'lucide-react'
import { useState } from "react"
import { usePathname } from "next/navigation"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavItem {
    title: string
    url: string
    icon: LucideIcon
    items?: {
        title: string
        url: string
    }[]
}

export function NavMain({ items }: { items: NavItem[] }) {
    const pathname = usePathname()
    const [openItems, setOpenItems] = useState<string[]>([])

    const toggleItem = (title: string) => {
        setOpenItems((prev) =>
            prev.includes(title)
                ? prev.filter((item) => item !== title)
                : [...prev, title]
        )
    }

    const isActive = (url: string) => pathname === url

    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Platform
            </SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        open={openItems.includes(item.title)}
                        onOpenChange={() => toggleItem(item.title)}
                    >
                        <SidebarMenuItem className={cn("mb-1", isActive(item.url) && "bg-[#ff770038]")}>
                            <SidebarMenuButton
                                asChild
                                className={cn(
                                    "flex items-center space-x-2 p-2.5 rounded-lg transition-colors hover:bg-gray-100",
                                    isActive(item.url) && "bg-[#ff770038] hover:bg-[#ff770038]"
                                )}
                            >
                                <Link href={item.url} className="flex items-center w-full">
                                    <item.icon className={cn("w-5 h-5 mr-2", isActive(item.url) ? "text-[#ff7700]" : "text-gray-600")} />
                                    <span className={cn("flex-grow text-sm font-medium", isActive(item.url) ? "text-[#ff7700]" : "text-gray-800")}>
                                        {item.title}
                                    </span>
                                    {item.items?.length && (
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuAction className="ml-auto p-1 rounded-sm hover:bg-gray-200 transition-colors">
                                                <ChevronRight
                                                    className={cn(
                                                        "w-4 h-4 text-gray-600 transition-transform duration-200",
                                                        openItems.includes(item.title) && "rotate-90"
                                                    )}
                                                />
                                                <span className="sr-only">Toggle {item.title} submenu</span>
                                            </SidebarMenuAction>
                                        </CollapsibleTrigger>
                                    )}
                                </Link>
                            </SidebarMenuButton>
                            {item.items?.length && (
                                <CollapsibleContent className="mt-1">
                                    <SidebarMenuSub>
                                        {item.items.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton
                                                    asChild
                                                    className={cn(
                                                        "pl-9 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100",
                                                        isActive(subItem.url) && "bg-[#ff7700] text-white hover:bg-[#ff7700]"
                                                    )}
                                                >
                                                    <Link href={subItem.url}>
                                                        <span>{subItem.title}</span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            )}
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}