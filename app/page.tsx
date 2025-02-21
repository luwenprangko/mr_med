"use client";

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Mail, Loader2 } from "lucide-react";
import ParticleBackground from "@/components/particles-bg";

export default function Home({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger the fade-in animation after the component mounts
    setIsVisible(true)
  }, [])
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    setLoading(true);
    router.push("/login"); // Navigate to login page

  };

  return (
    <main
      className={cn(
        "relative min-h-screen",
        isVisible ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
      )}
    >
      <ParticleBackground />
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-4">
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-7xl font-extrabold text-center p-2 outline-text text-zinc-900">
            Parallax Quiz
          </h1>
        </div>

        <div className="space-y-4 max-w-sm mx-auto w-full m-2">
          {/* Login with Email (with Loading State) */}
          <Button
            className="w-full select-none"
            variant="outline"
            onClick={handleLoginClick}
            disabled={loading} // Disable button when loading
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : <Mail />}
            {loading ? "Redirecting" : "Login with Email"}
          </Button>

          {/* HR Line with OR */}
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Button className="w-full bg-red-500 hover:bg-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="-12 0 512 512">
              <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504C110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6c98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4"/>
            </svg>
            Login with Google
          </Button>
          <Button className="w-full bg-blue-700 hover:bg-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="-96 0 512 512">
              <path fill="currentColor" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
            </svg>
            Login with Facebook
          </Button>

          {/* Centered Terms and Conditions */}
          <div className="flex items-center justify-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <a
                href="/terms"
                className="underline text-blue-600 hover:text-blue-800"
              >
                terms
              </a>{" "}
              and{" "}
              <a
                href="/conditions"
                className="underline text-blue-600 hover:text-blue-800"
              >
                conditions
              </a>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}
