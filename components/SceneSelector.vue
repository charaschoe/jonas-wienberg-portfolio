<template>
	<div class="w-full py-8">
		<!-- Profile Carousel -->
		<div class="flex justify-center gap-8 mb-16">
			<div
				v-for="(profile, index) in profiles"
				:key="index"
				class="relative w-36 h-36 transform transition-transform duration-300 hover:scale-105"
			>
				<div
					class="w-full h-full rounded-full overflow-hidden border-4 border-white/80 shadow-xl hover:border-white"
				>
					<img
						:src="profile.image"
						:alt="profile.name"
						class="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all"
					/>
				</div>
				<div
					class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm"
				>
					<div class="flex gap-1.5">
						<div
							v-for="i in 4"
							:key="i"
							class="w-1.5 h-1.5 rounded-full transition-all duration-300"
							:class="
								i === profile.active
									? 'bg-white scale-110'
									: 'bg-white/50'
							"
						></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Scene Selector -->
		<div
			class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4"
		>
			<div
				v-for="scene in scenes"
				:key="scene.name"
				class="relative aspect-square cursor-pointer group transform transition-all duration-300 hover:scale-105"
				@click="selectScene(scene)"
			>
				<div
					class="absolute inset-0 rounded-full overflow-hidden border-4 border-white/80 shadow-xl group-hover:border-white transition-all"
				>
					<img
						:src="scene.image"
						:alt="scene.name"
						class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 transition-opacity duration-300"
						:class="[scene.overlay, 'group-hover:opacity-80']"
					></div>
				</div>

				<!-- Scene Info -->
				<div
					class="absolute inset-0 flex flex-col justify-center items-center text-white p-6"
				>
					<div
						class="absolute top-6 right-6 w-10 h-10 rounded-full overflow-hidden border-2 border-white/80 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:border-white"
					>
						<img
							:src="scene.userImage"
							:alt="scene.userName"
							class="w-full h-full object-cover"
						/>
					</div>
					<div
						class="text-center transform transition-all duration-300 group-hover:scale-105"
					>
						<h3 class="text-3xl font-bold mb-2 tracking-wide">
							{{ scene.name }}
						</h3>
						<p class="text-sm font-medium text-white/90">
							{{ scene.location }}
						</p>
					</div>
					<div class="absolute bottom-6 left-0 right-0 text-center">
						<p
							class="text-sm font-medium tracking-wide text-white/90 backdrop-blur-sm py-1"
						>
							{{ scene.temperature }}° | {{ scene.music }} |
							{{ scene.mode }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const profiles = ref([
	{
		name: "Profile 1",
		image: "/images/profile1.jpg",
		active: 1,
	},
	{
		name: "Profile 2",
		image: "/images/profile2.jpg",
		active: 2,
	},
	{
		name: "Profile 3",
		image: "/images/profile3.jpg",
		active: 3,
	},
]);

const scenes = ref([
	{
		name: "SKYE FOG",
		location: "Brit 23",
		temperature: "24",
		music: "Brit",
		mode: "Regen",
		image: "/images/scenes/skye.jpg",
		userImage: "/images/profile2.jpg",
		overlay: "bg-gradient-to-b from-gray-900/40 to-gray-900/60",
	},
	{
		name: "BALI HEAT",
		location: "Indochine",
		temperature: "36",
		music: "Indochine",
		mode: "Regenwald",
		image: "/images/scenes/bali.jpg",
		userImage: "/images/profile2.jpg",
		overlay: "bg-gradient-to-b from-green-900/40 to-green-900/60",
	},
	{
		name: "ARCTIC ICE",
		location: "WimHoff",
		temperature: "2",
		music: "WimHoff",
		mode: "Strahl",
		image: "/images/scenes/arctic.jpg",
		userImage: "/images/profile2.jpg",
		overlay: "bg-gradient-to-b from-blue-900/40 to-blue-900/60",
	},
	{
		name: "you.",
		location: "Travis Scott",
		temperature: "25",
		music: "Travis Scott",
		mode: "Massage",
		image: "/images/scenes/you.jpg",
		userImage: "/images/profile2.jpg",
		overlay: "bg-gradient-to-tr from-red-500/80 to-orange-500/80",
	},
]);

const selectScene = (scene) => {
	// Handle scene selection
	console.log("Selected scene:", scene.name);
};
</script>

<style scoped>
.aspect-square {
	aspect-ratio: 1;
}
</style>
