"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePickerDemo } from "@/components/DatePicker";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";

// Define Zod schema for validation
const expenseSchema = z.object({
    title: z.string().min(1, "Title is required"),
    amount: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
    isRecurring: z.boolean(),
    recurrenceInterval: z.string().optional(),
    recurrenceStartDate: z.string().optional(),
    recurrenceEndDate: z.string().optional(),
});

type ExpenseFormData = z.infer<typeof expenseSchema>;

const AddExpense = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
        reset,
    } = useForm<ExpenseFormData>({
        resolver: zodResolver(expenseSchema),
        defaultValues: {
            isRecurring: false,
        },
    });

    const isRecurring = watch("isRecurring");

    const onSubmit = async (data: ExpenseFormData) => {
        try {
            const response = await fetch("/api/expenses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Expense added successfully!");
                reset();
            } else {
                toast.error("Failed to add expense.");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while adding the expense.");
        }
    };

    return (
        <Card className="max-w-lg w-full mx-auto mt-10">
            <CardHeader>
                <CardTitle>Add Expense</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" {...register("title")} placeholder="Expense title" />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="amount">Amount</Label>
                        <Input id="amount" {...register("amount")} placeholder="0.00" type="number" />
                        {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
                    </div>

                    <div>
                        <Label>Date</Label>
                        {isRecurring ? (
                            <DatePickerWithRange
                                className="mt-2"
                                onChange={({ startDate, endDate }) => {
                                    setValue("recurrenceStartDate", startDate);
                                    setValue("recurrenceEndDate", endDate);
                                }}
                            />
                        ) : (
                            <DatePickerDemo
                                className="mt-2"
                                onChange={(date) => setValue("recurrenceStartDate", date)}
                            />
                        )}
                        {isRecurring && errors.recurrenceEndDate && (
                            <p className="text-red-500 text-sm">{errors.recurrenceEndDate.message}</p>
                        )}
                    </div>

                    <div>
                        <Checkbox id="isRecurring" {...register("isRecurring")} />
                        <Label htmlFor="isRecurring" className="ml-2">
                            Is Recurring
                        </Label>
                    </div>

                    {isRecurring && (
                        <>
                            <div>
                                <Label htmlFor="recurrenceInterval">Recurrence Interval</Label>
                                <Select
                                    onValueChange={(value) => setValue("recurrenceInterval", value)}
                                    defaultValue="daily"
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Interval" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="daily">Daily</SelectItem>
                                        <SelectItem value="weekly">Weekly</SelectItem>
                                        <SelectItem value="monthly">Monthly</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.recurrenceInterval && (
                                    <p className="text-red-500 text-sm">{errors.recurrenceInterval.message}</p>
                                )}
                            </div>
                        </>
                    )}

                    <Button type="submit" className="w-full">
                        Add Expense
                    </Button>
                </form>
            </CardContent>
            <CardFooter>
                <p className="text-sm text-gray-500">All fields marked with * are mandatory.</p>
            </CardFooter>
        </Card>
    );
};

export default AddExpense;
