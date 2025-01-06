import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, PieChart, Zap, Shield } from 'lucide-react'

const features = [
    {
        title: "AI-Powered Insights",
        description: "Get personalized recommendations to optimize your spending habits.",
        icon: Brain
    },
    {
        title: "Real-time Tracking",
        description: "Monitor your expenses as they happen with instant updates.",
        icon: Zap
    },
    {
        title: "Visual Reports",
        description: "Understand your financial patterns with intuitive charts and graphs.",
        icon: PieChart
    },
    {
        title: "Bank-level Security",
        description: "Your financial data is protected with state-of-the-art encryption.",
        icon: Shield
    }
]

export default function Features() {
    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-5xl  font-bold text-center mb-12">Powerful Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="p-5 bg-card-main">
                            <CardHeader>
                                <feature.icon className="h-8 w-8 text-primary mb-2 text-purple-950" />
                                <CardTitle className="text-2xl font-bold text-purple-950 ">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-800 text-[1rem]">{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

