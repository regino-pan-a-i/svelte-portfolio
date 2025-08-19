<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<NavBar/>
	<div class="ml-50 m-10">
		
		{@render children()}
	</div>
</div>

<style>


</style>