<template>
	<div class="max-w-5xl mx-auto px-6 py-16 md:py-24">
		<!-- Project Header -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
			<div class="md:col-span-8">
				<h1 class="text-4xl font-light mb-4 tracking-tight">
					KonradAI - Visa Application Helper
				</h1>
				<p class="text-base text-gray-600 mb-8">
					Joint University Project / 3rd Semester
				</p>
			</div>
		</div>

		<!-- Project Overview -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
			<!-- Project Image - Full width on mobile, 8 columns on desktop -->
			<div class="md:col-span-12 mb-8">
				<img
					src="/images/projects/konradai/konradai_screenshot.jpg"
					alt="KonradAI Project Screenshot"
					class="w-full h-auto"
				/>
			</div>

			<!-- Project Description - 8 columns on desktop -->
			<div class="md:col-span-8 md:col-start-3">
				<p class="text-base leading-relaxed mb-0">
					This project aimed to redesign the German Federal Foreign
					Office's RKS Appointment platform, focusing on streamlining
					the visa application scheduling process for international
					users. The existing system suffered from fragmented
					navigation, cluttered information architecture, and
					inefficient appointment management, creating undue stress
					for applicants navigating complex bureaucratic requirements.
				</p>
			</div>
		</div>

		<!-- Content Sections -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20">
			<!-- Research Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					User-Centered Research
				</h2>
				<div class="space-y-4 text-sm leading-relaxed">
					<p>
						Our team conducted extensive user research with
						international students and professionals who had
						navigated the German visa application process. Key
						findings revealed:
					</p>
					<ul class="space-y-3">
						<li>
							<span class="font-medium">Language Barriers:</span>
							Non-German speakers struggled with technical
							terminology and inconsistent translations
						</li>
						<li>
							<span class="font-medium"
								>Information Overload:</span
							>
							Users reported feeling overwhelmed by dense, poorly
							organized content
						</li>
						<li>
							<span class="font-medium"
								>Appointment Anxiety:</span
							>
							Limited slot availability created significant stress
							and uncertainty
						</li>
					</ul>
				</div>
			</section>

			<!-- Solution Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Chrome Extension Solution
				</h2>
				<p class="text-sm leading-relaxed">
					Rather than proposing a complete platform redesign, we
					developed a Chrome extension that overlays the existing RKS
					system with an AI-powered assistant. This approach allowed
					for immediate implementation without requiring changes to
					the government infrastructure.
				</p>
				<p class="text-sm leading-relaxed mt-4">
					The extension features a contextual chatbot named KonradAI
					that guides users through each step of the application
					process, translating complex requirements, explaining
					documentation needs, and providing personalized assistance
					based on visa type and user circumstances.
				</p>
			</section>

			<!-- Key Features Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Key Features
				</h2>
				<ul class="space-y-3 text-sm leading-relaxed">
					<li>
						<span class="font-medium">Multilingual Support:</span>
						Real-time translation of interface elements and
						requirements in 8 languages
					</li>
					<li>
						<span class="font-medium">Document Checklist:</span>
						Dynamic, visa-specific document preparation guides
					</li>
					<li>
						<span class="font-medium">Appointment Alerts:</span>
						Notification system for newly available appointment
						slots
					</li>
					<li>
						<span class="font-medium">Progress Tracking:</span>
						Visual indicators of application completion status
					</li>
					<li>
						<span class="font-medium">FAQ Integration:</span>
						Contextual answers to common questions at each
						application stage
					</li>
				</ul>
			</section>

			<!-- Implementation Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Implementation & Testing
				</h2>
				<div class="space-y-4 text-sm leading-relaxed">
					<p>
						The extension was developed using JavaScript and the
						Chrome Extension API, with a React frontend for the chat
						interface. We integrated OpenAI's GPT-3.5 for natural
						language processing, fine-tuned on German visa
						application documentation and procedures.
					</p>
					<p>
						User testing with 12 international participants
						demonstrated a 40% reduction in application completion
						time and a significant decrease in reported stress
						levels. Feedback highlighted the assistant's ability to
						provide clear, contextual guidance as particularly
						valuable.
					</p>
				</div>
			</section>

			<!-- Project Technologies - Full width -->
			<section class="md:col-span-12 md:col-start-3 md:col-end-11">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Technologies & Methods
				</h2>
				<div class="flex flex-wrap gap-x-4 gap-y-2">
					<span class="text-xs text-gray-600">UX Research</span>
					<span class="text-xs text-gray-600"
						>Chrome Extension Development</span
					>
					<span class="text-xs text-gray-600">JavaScript</span>
					<span class="text-xs text-gray-600">React</span>
					<span class="text-xs text-gray-600">OpenAI API</span>
					<span class="text-xs text-gray-600"
						>Information Architecture</span
					>
					<span class="text-xs text-gray-600">Usability Testing</span>
				</div>
			</section>
		</div>

		<!-- Back to Projects Link -->
		<div class="mt-20">
			<NuxtLink
				to="/projects"
				class="text-sm uppercase tracking-widest hover:underline"
			>
				Back to Projects
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
// Page metadata
useHead({
	title: "KonradAI Project | Jonas Wienberg Portfolio",
	meta: [
		{
			name: "description",
			content:
				"KonradAI is a Chrome extension that streamlines the German visa application process with an AI-powered assistant.",
		},
	],
});
</script>

<style scoped>
ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
</style>
