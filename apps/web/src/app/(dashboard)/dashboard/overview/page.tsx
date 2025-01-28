"use client"

import * as React from "react"
import { BarChart, TrendingUp, PieChart, Bell, Wallet, CreditCard, Bot } from "lucide-react"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
    return (
        <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <Button variant="outline" className="flex items-center space-x-2">
                    <Bell className="size-4" />
                    <span>Notifications</span>
                </Button>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
                        <CreditCard className="size-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-gray-800">$2,340</p>
                        <p className="text-sm text-gray-500">+12% from last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Budget Remaining</h3>
                        <Wallet className="size-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-gray-800">$1,200</p>
                        <p className="text-sm text-gray-500">80% of budget used</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Savings</h3>
                        <TrendingUp className="size-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-gray-800">$500</p>
                        <p className="text-sm text-gray-500">+8% from last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="text-sm font-medium text-gray-500">AI Insights</h3>
                        <Bot className="size-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-gray-800">3 Alerts</p>
                        <p className="text-sm text-gray-500">Review suggestions</p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts and Insights Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Expense Trends Chart */}
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold text-gray-800">Expense Trends</h3>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                            <BarChart className="size-12 text-gray-400" />
                        </div>
                    </CardContent>
                    <CardFooter className="text-sm text-gray-500">
                        Visual representation of your spending over time.
                    </CardFooter>
                </Card>

                {/* Spending by Category */}
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold text-gray-800">Spending by Category</h3>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                            <PieChart className="size-12 text-gray-400" />
                        </div>
                    </CardContent>
                    <CardFooter className="text-sm text-gray-500">
                        Breakdown of expenses by category.
                    </CardFooter>
                </Card>
            </div>

            {/* Recent Transactions */}
            <Card>
                <CardHeader>
                    <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <div className="p-2 bg-gray-100 rounded-lg">
                                        <CreditCard className="size-5 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">Transaction {index + 1}</p>
                                        <p className="text-sm text-gray-500">Category</p>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-gray-800">-$50.00</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">
                        View All Transactions
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}