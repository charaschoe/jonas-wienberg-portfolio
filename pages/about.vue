<template>
	<div class="max-w-5xl mx-auto px-6 py-16 md:py-24">
		<!-- Grid Layout -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
			<!-- Profile Image - Spans 5 columns on desktop -->
			<div class="md:col-span-5">
				<div class="aspect-[3/4] overflow-hidden">
					<img
						src="/images/profiles/R0009867.JPG"
						alt="Jonas Wienberg"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>

			<!-- About Me Header - Spans 7 columns on desktop -->
			<div class="md:col-span-7 flex flex-col justify-center">
				<h1 class="text-4xl font-light mb-8 tracking-tight">
					About Me
				</h1>
				<p class="text-base text-gray-800 leading-relaxed">
					I'm an Interaction Design student passionate about creating
					meaningful digital experiences that solve real-world
					problems. With a background in business administration and a
					focus on innovation, I bring a unique perspective to design
					challenges.
				</p>
			</div>
		</div>

		<!-- Content Grid -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
			<!-- Education Section - Spans 6 columns on desktop -->
			<div class="md:col-span-6">
				<h2 class="text-2xl font-light mb-8 tracking-tight">
					Education
				</h2>
				<div class="space-y-10">
					<div>
						<h3 class="text-lg font-medium mb-1">
							Hochschule für Gestaltung Schwäbisch Gmünd
						</h3>
						<p class="text-sm text-gray-600 mb-3">
							B.A. Interaction Design | 2023 — ongoing
						</p>
						<ul class="text-sm space-y-1">
							<li>
								Academic Assistant in Communications Department
								(Social Media & Events of HfG)
							</li>
						</ul>
					</div>
					<div>
						<h3 class="text-lg font-medium mb-1">
							Hochschule für Wirtschaft und Umwelt
							Nürtingen-Geislingen
						</h3>
						<p class="text-sm text-gray-600 mb-3">
							B.Sc. Business Administration | 2022 — 2023
						</p>
					</div>
				</div>
			</div>

			<!-- Professional Experience Section - Spans 6 columns on desktop -->
			<div class="md:col-span-6">
				<h2 class="text-2xl font-light mb-8 tracking-tight">
					Professional Experience
				</h2>
				<div class="space-y-10">
					<div>
						<h3 class="text-lg font-medium mb-1">
							STRABAG Innovation & Digitalisation
						</h3>
						<p class="text-sm text-gray-600 mb-3">
							Stuttgart, Germany
						</p>
						<div class="mb-4">
							<p class="text-sm font-medium">
								Working Student - Governance, Reporting & Data
							</p>
							<p class="text-sm text-gray-600">
								November 2023 — ongoing
							</p>
						</div>
						<div>
							<p class="text-sm font-medium">
								Working Student - Funding
							</p>
							<p class="text-sm text-gray-600">
								November 2022 — November 2023
							</p>
						</div>
					</div>
					<div>
						<h3 class="text-lg font-medium mb-1">
							Additional Experience
						</h3>
						<ul class="text-sm space-y-1">
							<li>TIER Mobility</li>
							<li>UID GmbH</li>
							<li>Exyte</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Certifications & Skills Section - Spans 6 columns on desktop -->
			<div class="md:col-span-6">
				<h2 class="text-2xl font-light mb-8 tracking-tight">
					Certifications & Skills
				</h2>
				<ul class="grid grid-cols-1 gap-y-2 text-sm">
					<li>Intercultural Conflict Management</li>
					<li>
						Building Climate Resilience through Ecosystem-based
						Adaptation Planning
					</li>
					<li>Business Compliance</li>
					<li>Data Privacy</li>
					<li>Business English (C1 Level)</li>
					<li>UI/UX Design</li>
					<li>Project Management (PMO)</li>
					<li>Design Innovation</li>
				</ul>
			</div>

			<!-- Leadership Section - Spans 6 columns on desktop -->
			<div class="md:col-span-6">
				<h2 class="text-2xl font-light mb-8 tracking-tight">
					Leadership
				</h2>
				<div>
					<h3 class="text-lg font-medium mb-1">
						Chair of the General Students' Committee (AStA)
					</h3>
					<p class="text-sm">
						Leading student advocacy initiatives, organizing
						institutional events, and fostering collaborative
						projects within the academic community.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style>
body {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	background-color: #ffffff;
	color: #000000;
}

ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
</style>
