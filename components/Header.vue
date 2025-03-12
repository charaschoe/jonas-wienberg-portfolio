<!-- <template> 
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style> -->

<template>
	<header class="bg-white shadow-sm">
		<nav class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<NuxtLink to="/" class="text-xl font-bold text-gray-800">
					Jonas Wienberg
				</NuxtLink>
				<div class="space-x-6">
					<NuxtLink to="/" class="text-gray-600 hover:text-gray-900"
						>Home</NuxtLink
					>
					<NuxtLink
						to="/projects"
						class="text-gray-600 hover:text-gray-900"
						>Projects</NuxtLink
					>
					<NuxtLink
						to="/about"
						class="text-gray-600 hover:text-gray-900"
						>About</NuxtLink
					>
					<NuxtLink
						to="/contact"
						class="text-gray-600 hover:text-gray-900"
						>Contact</NuxtLink
					>
				</div>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup></script>

<style scoped></style>
