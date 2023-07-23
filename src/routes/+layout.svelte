<script>
  import Header from "./Header.svelte";

</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: 445px;
		margin: auto;
		padding: 0 10px;
	}


</style>
