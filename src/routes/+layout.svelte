<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<NavBar/>
	<div class="ml-60">
		
		{@render children()}
	</div>
</div>

<style>
/* div{
	margin-left: 14%;
} */

</style>