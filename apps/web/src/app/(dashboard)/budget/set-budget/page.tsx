"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SetBudgetPage() {
    const [budget, setBudget] = useState("")
    const [category, setCategory] = useState("")
    const [note, setNote] = useState("")
    const [budgets, setBudgets] = useState<any[]>([])

    const handleAddBudget = () => {
        if (!budget || !category) {
            alert("Please fill in all required fields!")
            return
        }

        const newBudget = {
            id: Date.now(),
            budget: parseFloat(budget),
            category,
            note,
        }

        setBudgets((prev) => [...prev, newBudget])
        setBudget("")
        setCategory("")
        setNote("")
    }

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Set Your Budget</CardTitle>
                    <CardDescription>Set your budget for the month</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-[1fr_4fr] gap-4">
                        <div className="flex flex-col gap-y-4">
                            <ul className="space-y-2">
                                <li>
                                    <Button variant={'ghost'}>Budget</Button>
                                </li>
                                <li>
                                    <Button variant={'ghost'}>Budget</Button>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2 border-b-2 pb-4">
                                <p className="text-xl font-semibold">Profile</p>
                                <p className="text-sm">This is how others will see you on the site.</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="budget">Budget Amount</Label>
                                    <Input
                                        id="budget"
                                        type="number"
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                        placeholder="Enter budget amount"
                                    />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        id="category"
                                        type="text"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder="e.g., Food, Rent, Utilities"
                                    />
                                </div>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="note">Note (Optional)</Label>
                                <Input
                                    id="note"
                                    type="text"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    placeholder="Add a note (optional)"
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex justify-end">
                    <Button onClick={handleAddBudget}>Add Budget</Button>
                </CardFooter>
            </Card>

            {budgets.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Your Budgets</h2>
                    <ul className="space-y-2">
                        {budgets.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                            >
                                <div>
                                    <p className="font-semibold">{item.category}</p>
                                    <p className="text-sm text-gray-600">
                                        ${item.budget.toFixed(2)} - {item.note || "No note"}
                                    </p>
                                </div>
                                <Button
                                    variant="destructive"
                                    onClick={() =>
                                        setBudgets((prev) => prev.filter((b) => b.id !== item.id))
                                    }
                                >
                                    Delete
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
