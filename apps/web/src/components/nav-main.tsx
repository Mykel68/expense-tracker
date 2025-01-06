"use client"

import { ChevronRight, TypeIcon as type, LucideIcon } from 'lucide-react'
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
import { subscribe } from 'diagnostics_channel'

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
            <SidebarGroupLabel className="text-lg font-semibold mb-2">Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        open={openItems.includes(item.title)}
                        onOpenChange={() => toggleItem(item.title)}
                    >
                        <SidebarMenuItem className={cn("p-1 rounded-md", isActive(item.url) && "bg-[#ff770038]")}>
                            <SidebarMenuButton
                                asChild
                                tooltip={item.title}
                                className={cn(
                                    "flex items-center space-x-2 p-2 rounded-md transition-colors",
                                    isActive(item.url) && "!bg-[#ff7700] hover:bg-[#ff7700] text-primary-foreground"
                                )}
                            >
                                <Link href={item.url} className="flex items-center w-full">
                                    <item.icon className="w-5 h-5 mr-2" />
                                    <span className="flex-grow">{item.title}</span>
                                    {item.items?.length && (
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuAction className="ml-auto transition-transform duration-200">
                                                <ChevronRight
                                                    className={cn(
                                                        "w-4 h-4",
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
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton
                                                    asChild
                                                    className={cn(
                                                        "pl-9 py-2 rounded-md transition-colors",
                                                        isActive(subItem.url) && "bg-[#ff7700] text-secondary-foreground"
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

