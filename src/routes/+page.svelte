<script>
	import link from "$lib/images/link.svg";
	import insta from "$lib/images/insta.svg";
	import github from "$lib/images/github.svg";
</script>

<div>
	<div class="content">
		<a class="link" style="background-image: url({insta});"
			href="https://instagram.com/_wooncloud"
			target="_blank" rel="noopener noreferrer">
			인스타
		</a>
		<a class="link" style="background-image: url({link});"
			href="https://wooncloud.tistory.com"
			target="_blank" rel="noopener noreferrer">
			티스토리
		</a>
		<a class="link" style="background-image: url({github});"
			href="https://github.com/wooncloud"
			target="_blank" rel="noopener noreferrer">
			깃허브
		</a>
		<a class="link" style="background-image: url({insta});"
			href="https://instagram.com/dosiowl_official"
			target="_blank" rel="noopener noreferrer">
			도시부엉
		</a>
		<a class="link" style="background-image: url({link});"
			href="https://litt.ly/dosiowl"
			target="_blank" rel="noopener noreferrer">
			도시부엉 리틀리
		</a>
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