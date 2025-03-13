<template>
	<div class="max-w-4xl mx-auto px-4">
		<section class="py-12">
			<div class="flex flex-col md:flex-row gap-8 mb-10">
				<!-- Profile Image -->
				<div class="w-full md:w-1/3 mb-6 md:mb-0">
					<img
						src="/images/profiles/R0009867.JPG"
						alt="Jonas Wienberg"
						class="rounded-lg shadow-md w-full max-w-xs mx-auto"
					/>
				</div>

				<!-- About Me Header -->
				<div class="w-full md:w-2/3">
					<h1 class="text-3xl font-bold mb-4">About Me</h1>
					<p class="text-lg text-gray-700 mb-6">
						I'm an Interaction Design student passionate about
						creating meaningful digital experiences that solve
						real-world problems. With a background in business
						administration and a focus on innovation, I bring a
						unique perspective to design challenges.
					</p>
				</div>
			</div>

			<div class="prose prose-lg max-w-none">
				<div class="mb-12">
					<h2 class="text-2xl font-semibold mb-6">Education</h2>
					<div class="space-y-6">
						<div>
							<h3 class="text-xl font-medium">
								Hochschule für Gestaltung Schwäbisch Gmünd
							</h3>
							<p class="text-gray-600">
								B.A. Interaction Design | 2023 — ongoing
							</p>
							<ul class="mt-2">
								<li>
									Academic Assistant in Communications
									Department (Social Media & Events of HfG)
								</li>
							</ul>
						</div>
						<div>
							<h3 class="text-xl font-medium">
								Hochschule für Wirtschaft und Umwelt
								Nürtingen-Geislingen
							</h3>
							<p class="text-gray-600">
								B.Sc. Business Administration | 2022 — 2023
							</p>
						</div>
					</div>
				</div>

				<div class="mb-12">
					<h2 class="text-2xl font-semibold mb-6">
						Professional Experience
					</h2>
					<div class="space-y-6">
						<div>
							<h3 class="text-xl font-medium">
								STRABAG Innovation & Digitalisation
							</h3>
							<p class="text-gray-600">Stuttgart, Germany</p>
							<div class="mt-2">
								<p class="font-medium">
									Working Student - Governance, Reporting &
									Data
								</p>
								<p class="text-gray-600">
									November 2023 — ongoing
								</p>
							</div>
							<div class="mt-2">
								<p class="font-medium">
									Working Student - Funding
								</p>
								<p class="text-gray-600">
									November 2022 — November 2023
								</p>
							</div>
						</div>
						<div>
							<h3 class="text-xl font-medium">
								Additional Experience
							</h3>
							<ul class="mt-2">
								<li>TIER Mobility</li>
								<li>UID GmbH</li>
								<li>Exyte</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="mb-12">
					<h2 class="text-2xl font-semibold mb-6">
						Certifications & Skills
					</h2>
					<ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
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

				<div>
					<h2 class="text-2xl font-semibold mb-6">Leadership</h2>
					<div>
						<h3 class="text-xl font-medium">
							Chair of the General Students' Committee (AStA)
						</h3>
						<p class="mt-2">
							Leading student advocacy initiatives, organizing
							institutional events, and fostering collaborative
							projects within the academic community.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup></script>

<style>
.prose ul {
	list-style-type: none;
	padding: 0;
}
</style>
