<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import About from '$lib/components/About.svelte';
	import Companies from '$lib/components/Companies.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main>
	<Navbar />
	<Hero />
	<Services />
	<About />
	<Companies />
	<Contact />
</main>
<Footer />

<style>
	main {
		width: 100%;
	}
</style>
