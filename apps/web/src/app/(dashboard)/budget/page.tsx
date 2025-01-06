"use client"
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const BudgetPage = () => {
    const [categories, setCategories] = useState([
        { name: "Groceries", allocated: 200, spent: 150 },
        { name: "Entertainment", allocated: 100, spent: 120 },
    ]);

    const [newCategory, setNewCategory] = useState({ name: "", allocated: 0 });

    const handleAddCategory = () => {
        setCategories([...categories, { ...newCategory, spent: 0 }]);
        setNewCategory({ name: "", allocated: 0 });
    };

    return (
        <div className="p-6 space-y-6">
            {/* Budget Overview */}
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-100 rounded-lg">
                    <h3 className="text-lg font-bold">Total Budget</h3>
                    <p>${categories.reduce((sum, c) => sum + c.allocated, 0)}</p>
                </div>
                <div className="p-4 bg-red-100 rounded-lg">
                    <h3 className="text-lg font-bold">Spent</h3>
                    <p>${categories.reduce((sum, c) => sum + c.spent, 0)}</p>
                </div>
                <div className="p-4 bg-green-100 rounded-lg">
                    <h3 className="text-lg font-bold">Remaining</h3>
                    <p>
                        $
                        {categories.reduce(
                            (sum, c) => sum + (c.allocated - c.spent),
                            0
                        )}
                    </p>
                </div>
            </div>

            {/* Category List */}
            <div>
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border border-gray-200">Category</th>
                            <th className="p-2 border border-gray-200">Allocated</th>
                            <th className="p-2 border border-gray-200">Spent</th>
                            <th className="p-2 border border-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={index} className="border border-gray-200">
                                <td className="p-2">{category.name}</td>
                                <td className="p-2">${category.allocated}</td>
                                <td className="p-2">${category.spent}</td>
                                <td className="p-2">
                                    <button className="text-blue-500 hover:underline mr-2">
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() =>
                                            setCategories(
                                                categories.filter((_, i) => i !== index)
                                            )
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add New Category */}
            <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Add New Category</h3>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Category Name"
                        className="p-2 border border-gray-200 rounded w-full"
                        value={newCategory.name}
                        onChange={(e) =>
                            setNewCategory({ ...newCategory, name: e.target.value })
                        }
                    />
                    <input
                        type="number"
                        placeholder="Allocated Amount"
                        className="p-2 border border-gray-200 rounded w-full"
                        value={newCategory.allocated}
                        onChange={(e) =>
                            setNewCategory({
                                ...newCategory,
                                allocated: parseInt(e.target.value || "0", 10),
                            })
                        }
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={handleAddCategory}
                    >
                        Add Category
                    </button>
                </div>
            </div>

            {/* Insights */}
            <div>
                <h3 className="text-xl font-bold mb-4">Spending Insights</h3>
                <BarChart width={600} height={300} data={categories}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="spent" fill="#8884d8" />
                    <Bar dataKey="allocated" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default BudgetPage;
