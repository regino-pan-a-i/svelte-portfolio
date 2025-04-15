<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<NavBar/>

	{@render children()}
</div>

<style>
div{
	margin-left: 24%;
}

</style>