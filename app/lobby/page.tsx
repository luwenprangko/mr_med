"use client";

import { Monitor, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ParticleBackground from "@/components/particles-bg";

export default function GameModeSelection() {
	const [selectedMode, setSelectedMode] = useState<
		"simulation" | "multiplayer" | null
	>(null);

	return (
		<div className="relative min-h-screen flex flex-col">
			<ParticleBackground />
			<div className="flex-grow flex flex-col items-center justify-center">
				<h1 className="text-7xl font-extrabold text-center p-2 outline-text text-zinc-900">
					Parallax Quiz
				</h1>
			</div>
			<div className="min-h-[400px] w-full max-w-3xl mx-auto p-6 flex flex-col items-center justify-center gap-8 flex-grow">
				<h1 className="text-4xl font-bold text-center mb-4">
					Select Game Mode
				</h1>

				<div className="grid md:grid-cols-2 gap-6 w-full">
					<a
						href="/sim" // Link to the simulation page
						className={cn(
							"group relative overflow-hidden p-6 cursor-pointer transition-all duration-300 hover:scale-105",
							"border-2 hover:border-primary",
							selectedMode === "simulation" && "border-primary bg-primary/5"
						)}
						onClick={() => setSelectedMode("simulation")} // Set selected mode to "simulation"
					>
						<div className="flex flex-col items-center gap-4 text-center">
							<div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
								<Monitor className="w-12 h-12 text-primary" />
							</div>
							<div>
								<h2 className="text-2xl font-bold mb-2">Simulation</h2>
								<p className="text-muted-foreground">
									Play in a single-player experience
								</p>
							</div>
						</div>
						<div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 rounded-lg" />
					</a>

					<a
						href="/multi" // Link to the multiplayer page
						className={cn(
							"group relative overflow-hidden p-6 cursor-pointer transition-all duration-300 hover:scale-105",
							"border-2 hover:border-primary",
							selectedMode === "multiplayer" && "border-primary bg-primary/5"
						)}
						onClick={() => setSelectedMode("multiplayer")} // Set selected mode to "multiplayer"
					>
						<div className="flex flex-col items-center gap-4 text-center">
							<div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
								<Users className="w-12 h-12 text-primary" />
							</div>
							<div>
								<h2 className="text-2xl font-bold mb-2">Multiplayer</h2>
								<p className="text-muted-foreground">
									Challenge other players in online matches
								</p>
							</div>
						</div>
						<div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 rounded-lg" />
					</a>
				</div>
			</div>
		</div>
	);
}
