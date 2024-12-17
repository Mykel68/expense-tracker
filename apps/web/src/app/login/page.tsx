import { LoginForm } from "@/components/LoginForm"

export default function LoginPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:pt-4">
            <div className="w-full max-w-sm md:max-w-6xl">
                <LoginForm />
            </div>
        </div>
    )
}
