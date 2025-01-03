"use client"

import React from "react"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"

type ChartProps = {
    data: Array<{ month: string; spent: number; saved: number }>
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
    return (
        <div className="w-full h-72">
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="spent" fill="#f87171" name="Spent" />
                    <Bar dataKey="saved" fill="#4ade80" name="Saved" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
