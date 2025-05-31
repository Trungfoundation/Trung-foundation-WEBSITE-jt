import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewsletterConfirmation() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-emerald-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Subscribing!</h1>

        <p className="text-gray-600 mb-6">
          You have successfully subscribed to our newsletter. We'll keep you updated with the latest news, events, and
          stories from our work across Uganda.
        </p>

        <p className="text-sm text-gray-500 mb-8">
          If you don't receive our welcome email within the next few minutes, please check your spam folder and add{" "}
          <span className="font-medium">Trungmusana@gmail.com</span> to your contacts.
        </p>

        <div className="space-y-4">
          <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
            <Link href="/">Return to Homepage</Link>
          </Button>

          <Button asChild variant="outline" className="w-full">
            <Link href="/blog">Read Our Latest Stories</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
