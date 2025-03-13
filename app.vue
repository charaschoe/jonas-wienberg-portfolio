<template>
	<div class="min-h-screen bg-white">
		<Header />
		<main>
			<NuxtPage />
		</main>
	</div>
</template>

<script setup>
useHead({
	title: "Jonas Wienberg - Portfolio",
	meta: [
		{
			name: "description",
			content:
				"Personal portfolio of Jonas Wienberg - Developer & Creator",
		},
		{
			name: "keywords",
			content: "Jonas Wienberg, Portfolio, Developer, Projects",
		},
	],
	link: [
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@300;400;500&display=swap",
		},
	],
});
</script>

<style>
body {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	background-color: #ffffff;
	color: #000000;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

* {
	box-sizing: border-box;
}
</style>
