import {
	Users,
	Activity,
	Stethoscope,
	Clock,
	Cuboid,
	MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function EmergencySimulation() {
	return (
		<div className="max-w-7xl mx-auto p-6">
			<div className="flex justify-between items-center mb-8">
				<div>
					<h1 className="text-3xl font-bold mb-2">Torax Room Simulation</h1>
					<p className="text-muted-foreground">
						Real-Life Simulations, Limitless Learning.
					</p>
				</div>
				<Button className="bg-blue-600 hover:bg-blue-700">Add New Room</Button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
				<div className="bg-white rounded-lg p-6 shadow-sm border">
					<div className="flex items-center gap-4">
						<div className="bg-blue-50 p-2 rounded-lg">
							<Activity className="w-6 h-6 text-blue-600" />
						</div>
						<div>
							<div className="text-2xl font-bold">12</div>
							<div className="text-muted-foreground text-sm">Active Rooms</div>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-lg p-6 shadow-sm border">
					<div className="flex items-center gap-4">
						<div className="bg-blue-50 p-2 rounded-lg">
							<Users className="w-6 h-6 text-blue-600" />
						</div>
						<div>
							<div className="text-2xl font-bold">48</div>
							<div className="text-muted-foreground text-sm">Online Users</div>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-lg p-6 shadow-sm border">
					<div className="flex items-center gap-4">
						<div className="bg-blue-50 p-2 rounded-lg">
							<Clock className="w-6 h-6 text-blue-600" />
						</div>
						<div>
							<div className="text-2xl font-bold">1,234</div>
							<div className="text-muted-foreground text-sm">
								Hours Practiced
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="space-y-4">
				<div className="bg-white rounded-lg p-6 shadow-sm border">
					<div className="flex justify-between items-start mb-6">
						<div>
							<div className="flex items-center gap-2 mb-2">
								<Cuboid className="w-5 h-5 text-blue-600" />
								<h2 className="text-xl font-semibold">
									Multiple Trauma Management
								</h2>
							</div>
							<p className="text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
						</div>
						<Badge className="bg-blue-600">Open</Badge>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<Users className="w-4 h-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">
									4/10 participants
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="w-4 h-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">30 mins</span>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="flex -space-x-2">
								{[1, 2, 3, 4].map((i) => (
									<Avatar key={i} className="border-2 border-white">
										<AvatarFallback>U{i}</AvatarFallback>
									</Avatar>
								))}
							</div>
							<Button variant="outline" className="gap-2">
								<MessageSquare className="w-4 h-4" />
								Chat
							</Button>
							<Button className="bg-gray-900 text-white hover:bg-gray-800">
								Join Session
							</Button>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-lg p-6 shadow-sm border">
					<div className="flex justify-between items-start mb-6">
						<div>
							<div className="flex items-center gap-2 mb-2">
								<Cuboid className="w-5 h-5 text-blue-600" />
								<h2 className="text-xl font-semibold">
									Multiple Trauma Management
								</h2>
							</div>
							<p className="text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
						</div>
						<Badge className="bg-yellow-500">In Progress</Badge>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<Users className="w-4 h-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">
									6/12 participants
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="w-4 h-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">45 mins</span>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="flex -space-x-2">
								{[1, 2, 3, 4].map((i) => (
									<Avatar key={i} className="border-2 border-white">
										<AvatarFallback>U{i}</AvatarFallback>
									</Avatar>
								))}
							</div>
							<Button variant="outline" className="gap-2">
								<MessageSquare className="w-4 h-4" />
								Chat
							</Button>
							<Button className="bg-gray-900 text-white hover:bg-gray-800">
								Join Session
							</Button>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-lg p-6 shadow-sm border">
					<div className="flex justify-between items-start mb-6">
						<div>
							<div className="flex items-center gap-2 mb-2">
								<Cuboid className="w-5 h-5 text-blue-600" />
								<h2 className="text-xl font-semibold">
									Multiple Trauma Management
								</h2>
							</div>
							<p className="text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
						</div>
						<Badge className="bg-red-500">Full</Badge>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<Users className="w-4 h-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">
									6/6 participants
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="w-4 h-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">45 mins</span>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="flex -space-x-2">
								{[1, 2, 3, 4].map((i) => (
									<Avatar key={i} className="border-2 border-white">
										<AvatarFallback>U{i}</AvatarFallback>
									</Avatar>
								))}
							</div>
							<Button variant="outline" className="gap-2">
								<MessageSquare className="w-4 h-4" />
								Chat
							</Button>
							<Button className="bg-gray-900 text-white hover:bg-gray-800">
								Join Session
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
