import { BarChart, Bot, CreditCard, DollarSign, FileText, LifeBuoy, PieChart, Send, Settings2, User, TrendingUp, AlertCircle, Wallet, Bell, FileBarChart } from "lucide-react";

export const data = {
    user: {
        name: "Micheal",
        email: "micheal@example.com",
        avatar: "/avatars/micheal.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard/overview",
            icon: BarChart,
            isActive: true,
            items: [
                {
                    title: "Overview",
                    url: "/dashboard/overview",
                },
                {
                    title: "AI Insights",
                    url: "/dashboard/ai-insights",
                },
                {
                    title: "Monthly Summary",
                    url: "/dashboard/monthly-summary",
                },
            ],
        },
        {
            title: "Expenses",
            url: "/expenses",
            icon: CreditCard,
            items: [
                {
                    title: "Track Expenses",
                    url: "/expenses/track",
                },
                {
                    title: "Expense Categories",
                    url: "/expenses/categories",
                },
                {
                    title: "Recurring Expenses",
                    url: "/expenses/recurring",
                },
                {
                    title: "Spending Trends",
                    url: "/expenses/trends",
                    icon: TrendingUp,
                },
            ],
        },
        {
            title: "Budgeting",
            url: "/budget",
            icon: Wallet,
            items: [
                {
                    title: "Set Budgets",
                    url: "/budget/set-budget",
                },
                {
                    title: "Budget Progress",
                    url: "/budget/progress",
                },
                {
                    title: "Adjust Budgets",
                    url: "/budget/adjust",
                },
            ],
        },
        {
            title: "AI Insights",
            url: "/ai-insights",
            icon: Bot,
            items: [
                {
                    title: "Expense Analysis",
                    url: "/ai-insights/analysis",
                },
                {
                    title: "Savings Recommendations",
                    url: "/ai-insights/savings",
                },
                {
                    title: "Risk Alerts",
                    url: "/ai-insights/alerts",
                    icon: AlertCircle,
                },
            ],
        },
        {
            title: "Reports",
            url: "/reports",
            icon: FileBarChart,
            items: [
                {
                    title: "Monthly Reports",
                    url: "/reports/monthly",
                },
                {
                    title: "Annual Reports",
                    url: "/reports/annual",
                },
                {
                    title: "Custom Reports",
                    url: "/reports/custom",
                },
            ],
        },
        {
            title: "Settings",
            url: "/settings",
            icon: Settings2,
            items: [
                {
                    title: "Profile",
                    url: "/settings/profile",
                },
                {
                    title: "Notifications",
                    url: "/settings/notifications",
                    icon: Bell,
                },
                {
                    title: "Preferences",
                    url: "/settings/preferences",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Help Center",
            url: "/help",
            icon: LifeBuoy,
        },
        {
            title: "Submit Feedback",
            url: "/feedback",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Personal Expenses",
            url: "/projects/personal",
            icon: PieChart,
        },
        {
            name: "Shared Expenses",
            url: "/projects/shared",
            icon: User,
        },
    ],
};