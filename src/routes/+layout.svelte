<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="">
	<NavBar/>
  	<div class="h-screen overflow-auto px-4 md:ml-64">
    	<div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
			{@render children()}
		
		</div>
	</div>
</div>

<style>


</style>