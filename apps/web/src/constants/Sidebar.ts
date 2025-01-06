import { BarChart, Bot, CreditCard, DollarSign, FileText, LifeBuoy, PieChart, Send, Settings2, User } from "lucide-react";

export const data = {
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
            url: "/transaction",
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
            url: "/budget",
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
