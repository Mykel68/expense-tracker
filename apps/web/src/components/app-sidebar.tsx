"use client"

import * as React from "react"
import {
    BarChart,
    Bot,
    CreditCard,
    DollarSign,
    FileText,
    LifeBuoy,
    PieChart,
    Send,
    Settings2,
    User,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { data } from "@/constants/Sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props} className="opacity-80 bg-[#f8f0e0e0]  ">
            <SidebarHeader className="opacity-80 bg-muted">
                <SidebarMenu >
                    <SidebarMenuItem >
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <BarChart className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold text-[#ff7700]">Expense Tracker</span>
                                    <span className="truncate text-xs text-[#6928ea]">AI Insights</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="sidebar opacity-80 bg-muted " >
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter className="opacity-80 bg-muted">
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
