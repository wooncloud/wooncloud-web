<script>
	import link from "$lib/images/link.svg";
	import insta from "$lib/images/insta.svg";
</script>

<div>
	<div class="content">
		<a class="link" style="background-image: url({insta});"
			href="https://instagram.com/_wooncloud">인스타</a>
		<a class="link" style="background-image: url({link});"
			href="https://wooncloud.tistory.com">티스토리</a>
		<a class="link" style="background-image: url({insta});"
			href="https://instagram.com/dosiowl_official">도시부엉</a>
		<a class="link" style="background-image: url({link});"
			href="https://litt.ly/dosiowl">도시부엉 리틀리</a>
	</div>
</div>

<style>
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.link {
		text-decoration: none;
		margin: 10px 0;
		padding: 10px;
		border-radius: 10px;
		border: 2px solid dimgray;
		min-height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
		font-weight: bold;
		transition: all 0.2s ease-in-out;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: 3% 50%;
		background-size: 10%;
	}

	.link:hover {
		background-color: gray;
		color: white;
	}

	.link:active {
		background-color: dimgray;
	}
</style>