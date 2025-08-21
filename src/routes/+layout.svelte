<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="">
	<NavBar/>
	<div class="md:ml-50 m-10">
		
		{@render children()}
	</div>
</div>

<style>


</style>