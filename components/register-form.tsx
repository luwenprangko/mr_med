"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export function RegisterForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Trigger the fade-in animation after the component mounts
		setIsVisible(true);
	}, []);

	return (
		<div
			className={cn(
				"flex flex-col gap-6",
				isVisible
					? "opacity-100 transition-opacity duration-1000"
					: "opacity-0",
				className
			)}
			{...props}
		>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Register</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="luwen@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input id="password" type="password" required />
								<Label htmlFor="password">Confirm Password</Label>
								<Input id="repassword" type="password" required />
							</div>
							<Button type="submit" className="w-full">
								Register
							</Button>
							{/* <Button variant="outline" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="-12 0 512 512">
                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504C110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6c98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4"/>
                </svg>
                Login with Google
              </Button> */}
						</div>
						<div className="mt-4 text-center text-sm">
							Already have an account?{" "}
							<a href="/login" className="underline underline-offset-4">
								Sign in
							</a>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
