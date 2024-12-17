import { CheckCircle } from 'lucide-react'

const steps = [
    "Connect your bank accounts securely",
    "Categorize your expenses automatically",
    "Receive AI-powered insights and recommendations",
    "Set budgets and track your progress",
    "Optimize your spending habits"
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-12">How It Works</h2>
                <div className="max-w-2xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center mb-6">
                            <CheckCircle className="h-6 w-6 text-green-500 mr-4" />
                            <p className="text-lg">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

