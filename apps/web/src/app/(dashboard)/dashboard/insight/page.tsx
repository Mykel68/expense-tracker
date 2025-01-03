"use client"

import React from "react"
import { TrendingUp, TrendingDown, AlertTriangle, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InsightPage() {
    const insights = [
        {
            title: "Spending Increased",
            description: "Your spending increased by 15% compared to last month.",
            icon: <TrendingUp className="text-red-500 w-8 h-8" />,
            advice: "Consider reviewing your discretionary expenses.",
        },
        {
            title: "Savings on Track",
            description: "You've saved 20% of your income this month.",
            icon: <TrendingDown className="text-green-500 w-8 h-8" />,
            advice: "Keep up the good work to hit your savings goal!",
        },
        {
            title: "High Expense Alert",
            description: "Dining out exceeded your budget by $50.",
            icon: <AlertTriangle className="text-yellow-500 w-8 h-8" />,
            advice: "Limit dining out next week to stay within your budget.",
        },
        {
            title: "AI Suggestion",
            description: "Switch to a cheaper utility plan to save $30/month.",
            icon: <Lightbulb className="text-blue-500 w-8 h-8" />,
            advice: "Check providers in your area for competitive plans.",
        },
    ]

    return (
        <div className="container mx-auto px-4 py-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Insights</h1>
                <p className="text-gray-500">AI-powered recommendations to optimize your finances</p>
            </div>

            {/* Insight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {insights.map((insight, index) => (
                    <Card key={index}>
                        <CardHeader className="flex items-center space-x-4">
                            {insight.icon}
                            <CardTitle>{insight.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{insight.description}</p>
                            <p className="mt-2 text-sm text-gray-500 italic">{insight.advice}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
