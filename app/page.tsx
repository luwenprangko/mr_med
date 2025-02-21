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
