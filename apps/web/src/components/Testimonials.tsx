// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card, CardContent, CardFooter } from "./ui/card"

const testimonials = [
    {
        quote: "ExpenseAI has completely transformed how I manage my finances. The AI insights are incredibly helpful!",
        author: "Sarah J.",
        role: "Small Business Owner",
        avatar: "/placeholder.svg?height=40&width=40"
    },
    {
        quote: "I've never been so aware of my spending habits. This app has helped me save money without even trying.",
        author: "Michael T.",
        role: "Software Engineer",
        avatar: "/placeholder.svg?height=40&width=40"
    },
    {
        quote: "The visual reports make it easy to understand where my money is going. Highly recommended!",
        author: "Emily R.",
        role: "Marketing Manager",
        avatar: "/placeholder.svg?height=40&width=40"
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-12">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                            </CardContent>
                            <CardFooter className="flex items-center">
                                <Avatar className="mr-4">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

