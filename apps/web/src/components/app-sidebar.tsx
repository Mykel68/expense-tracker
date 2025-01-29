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
    TrendingUp,
    AlertCircle,
    Wallet,
    Bell,
    FileBarChart,
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
import { useAuthInit } from "@/hooks/use-user"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    useAuthInit()
    return (
        <Sidebar variant="inset" {...props} className="bg-gray-50 border-r border-gray-200">
            <SidebarHeader className=" border-gray-200">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#" className="flex items-center space-x-3">
                                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6928ea] to-[#ff7700] text-white">
                                    <BarChart className="size-5" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-lg font-bold text-gray-800">Expo</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className=" space-y-6">
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter className=" border-t border-gray-200">
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    )
}