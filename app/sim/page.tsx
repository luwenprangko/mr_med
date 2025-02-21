import { Brain, Heart, Eye, Bone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AnatomyStudy() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-7xl">
			<h1 className="text-4xl font-bold mb-8">Interactive Anatomy Study</h1>

			<div className="grid lg:grid-cols-2 gap-8">
				<Card className="border shadow-sm">
					<CardContent className="p-8">
						<div className="aspect-square rounded-full bg-[#1e62b4]" />
					</CardContent>
				</Card>

				<div className="space-y-6">
					<Tabs defaultValue="eye" className="w-full">
						<TabsList className="w-full justify-start bg-gray-50 p-1 h-auto flex-wrap">
							<TabsTrigger
								value="brain"
								className="gap-2 data-[state=active]:bg-white"
							>
								<Brain className="h-4 w-4" />
								Brain
							</TabsTrigger>
							<TabsTrigger
								value="heart"
								className="gap-2 data-[state=active]:bg-white"
							>
								<Heart className="h-4 w-4" />
								Heart
							</TabsTrigger>
							<TabsTrigger
								value="eye"
								className="gap-2 data-[state=active]:bg-white"
							>
								<Eye className="h-4 w-4" />
								Eye
							</TabsTrigger>
							<TabsTrigger
								value="skeleton"
								className="gap-2 data-[state=active]:bg-white"
							>
								<Bone className="h-4 w-4" />
								Skeleton
							</TabsTrigger>
						</TabsList>

						<TabsContent value="eye" className="mt-6">
							<Card>
								<CardContent className="p-6 space-y-6">
									<div className="flex items-center gap-2">
										<Eye className="h-5 w-5 text-blue-600" />
										<h2 className="text-xl font-semibold">Eye</h2>
									</div>

									<p className="text-gray-600">Understand visual perception</p>

									<ul className="space-y-3">
										<li className="flex items-center gap-2">
											<div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
											Retina - Light-sensitive layer
										</li>
										<li className="flex items-center gap-2">
											<div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
											Cornea - Transparent front layer
										</li>
										<li className="flex items-center gap-2">
											<div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
											Lens - Focuses light
										</li>
										<li className="flex items-center gap-2">
											<div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
											Optic Nerve - Carries visual information
										</li>
									</ul>

									<div className="flex gap-3 pt-2">
										<Button>Start Quiz</Button>
										<Button variant="outline">View Details</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="brain">
							<Card>
								<CardContent className="p-6">
									<h2 className="text-xl font-semibold">
										Brain content coming soon...
									</h2>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="heart">
							<Card>
								<CardContent className="p-6">
									<h2 className="text-xl font-semibold">
										Heart content coming soon...
									</h2>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="skeleton">
							<Card>
								<CardContent className="p-6">
									<h2 className="text-xl font-semibold">
										Skeleton content coming soon...
									</h2>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
