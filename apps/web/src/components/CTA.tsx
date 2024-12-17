import { Button } from "@/components/ui/button"

export default function CTA() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-balance">Ready to Take Control of Your Finances?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-balance">
                    Join thousands of users who are already benefiting from AI-powered expense tracking and insights.
                </p>
                <Button size="lg" variant="secondary">
                    Start Your Free Trial
                </Button>
            </div>
        </section>
    )
}

