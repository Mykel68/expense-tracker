"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import sshInterceptor from "@/helpers/sshInterceptors"

const registerSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(5, "Password must be at least 5 characters"),
    name: z.string().min(4, "Name must be at least 4 characters"),
})

type RegisterInputs = z.infer<typeof registerSchema>

export function Register({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterInputs>({
        resolver: zodResolver(registerSchema),
    })
    const router = useRouter()

    const onSubmit = async (data: RegisterInputs) => {
        try {
            const response = await sshInterceptor.post("/api/auth/register", data)

            if (!response.status === true) {
                toast.error("Failed to register")
                return
            }

            toast.success("register successful!")
            router.push("/login")
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "An error occurred")
        }
    }
    return (
        <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit(onSubmit)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Sign up for an account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Join us today to access exclusive features and manage your account effortlessly.
                </p>
            </div>
            <div className="grid gap-6">
                {/* Username Field */}
                <div className="grid gap-2">
                    <Label htmlFor="name">Username</Label>
                    <Input id="name" type="text" placeholder="johndoe"   {...register("name")} required />
                    {errors.name && (
                        <Label htmlFor="name" className="text-sm text-red-500">
                            {errors.name.message}
                        </Label>
                    )}
                </div>
                {/* Email Field */}
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com"   {...register("email")} required />
                    {errors.email && (
                        <Label htmlFor="email" className="text-sm text-red-500">
                            {errors.email.message}
                        </Label>
                    )}
                </div>
                {/* Password Field */}
                <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" placeholder="********"   {...register("password")} required />
                    {errors.password && (
                        <Label htmlFor="password" className="text-sm text-red-500">
                            {errors.password.message}
                        </Label>
                    )}
                </div>
                {/* Register Button */}
                <Button type="submit" className="w-full">
                    Register
                </Button>
                {/* Divider */}
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
                {/* Sign Up with Google */}
                <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                        <path
                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                            fill="currentColor"
                        />
                    </svg>
                    Sign up with Google
                </Button>
            </div>
            {/* Footer */}
            <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" type="submit" className="underline underline-offset-4">
                    Login
                </Link>
            </div>
        </form>
    );
}