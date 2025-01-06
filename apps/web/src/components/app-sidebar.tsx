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

const data = {
    user: {
        name: "Micheal",
        email: "micheal@example.com",
        avatar: "/avatars/micheal.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: BarChart,
            isActive: true,
            items: [
                {
                    title: "Overview",
                    url: "/dashboard/overview",
                },
                {
                    title: "Insights",
                    url: "/dashboard/insight",
                },
                {
                    title: "Monthly Summary",
                    url: "#",
                },
            ],
        },
        {
            title: "Transactions",
            url: "#",
            icon: CreditCard,
            items: [
                {
                    title: "Recent Transactions",
                    url: "#",
                },
                {
                    title: "Categories",
                    url: "#",
                },
                {
                    title: "Recurrent Payments",
                    url: "#",
                },
            ],
        },
        {
            title: "Budgeting",
            url: "#",
            icon: DollarSign,
            items: [
                {
                    title: "Set Budgets",
                    url: "/budget/set-budget",
                },
                {
                    title: "Track Progress",
                    url: "#",
                },
                {
                    title: "Adjust Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "AI Insights",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Expense Analysis",
                    url: "#",
                },
                {
                    title: "Savings Suggestions",
                    url: "#",
                },
                {
                    title: "Risk Alerts",
                    url: "#",
                },
            ],
        },

        {
            title: "Reports",
            url: "#",
            icon: FileText,
            items: [
                {
                    title: "Monthly Reports",
                    url: "#",
                },
                {
                    title: "Annual Reports",
                    url: "#",
                },
                {
                    title: "Custom Reports",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "Profile",
                    url: "#",
                },
                {
                    title: "Notifications",
                    url: "#",
                },
                {
                    title: "Preferences",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Help Center",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Submit Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Personal Budgeting",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Team Expenses",
            url: "#",
            icon: User,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props} className="">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <BarChart className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">Expense Tracker</span>
                                    <span className="truncate text-xs">AI Insights</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="sidebar" >
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
