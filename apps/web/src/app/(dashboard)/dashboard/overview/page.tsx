"use client"

import * as React from "react"
import {
    BarChart,
    DollarSign,
    TrendingDown,
    TrendingUp,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart } from "@/components/Chart"

export default function OverviewPage() {
    const expenseData = [
        { month: "Jan", spent: 400, saved: 100 },
        { month: "Feb", spent: 350, saved: 150 },
        { month: "Mar", spent: 500, saved: 200 },
        { month: "Apr", spent: 450, saved: 250 },
    ]

    const totalSpent = expenseData.reduce((sum, item) => sum + item.spent, 0)
    const totalSaved = expenseData.reduce((sum, item) => sum + item.saved, 0)
    const savingsRate = ((totalSaved / (totalSpent + totalSaved)) * 100).toFixed(2)

    return (
        <div className="container mx-auto px-4 py-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Overview</h1>
                <p className="text-gray-500">Track your spending and savings</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Spent</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center space-x-4">
                        <DollarSign className="text-red-500 w-8 h-8" />
                        <span className="text-lg font-bold">${totalSpent}</span>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Total Saved</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center space-x-4">
                        <DollarSign className="text-green-500 w-8 h-8" />
                        <span className="text-lg font-bold">${totalSaved}</span>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Savings Rate</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center space-x-4">
                        <TrendingUp className="text-blue-500 w-8 h-8" />
                        <span className="text-lg font-bold">{savingsRate}%</span>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Monthly Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center space-x-4">
                        <BarChart className="text-indigo-500 w-8 h-8" />
                        <span className="text-lg font-bold">View Details</span>
                    </CardContent>
                </Card>
            </div>

            {/* Chart */}
            <div className="p-4 bg-white shadow-sm rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Spending vs. Savings</h2>
                <Chart data={expenseData} />
            </div>
        </div>
    )
}
