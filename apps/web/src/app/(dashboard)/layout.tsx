import { AppSidebar } from "@/components/app-sidebar"
import Header from "@/components/Header"

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expense Tracker - Dashboard",
    description: "Get personalized recommendations to optimize your spending habits.",
};


export default function Page({ children }: { children: React.ReactNode }) {

    return (
        <SidebarProvider className="!bg-gray-100" >
            <AppSidebar />
            <SidebarInset className="">
                <Header />
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
