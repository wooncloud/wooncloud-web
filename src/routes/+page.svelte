<script>
	import link from "$lib/images/link.svg";
	import insta from "$lib/images/insta.svg";
	import github from "$lib/images/github.svg";
</script>

<div>
	<div class="content">
		<a class="link" style="background-image: url({link});"
			href="https://wooncloud.tistory.com"
			target="_blank" rel="noopener noreferrer">
			블로그 (blog)
		</a>
		<a class="link" style="background-image: url({github});"
			href="https://github.com/wooncloud"
			target="_blank" rel="noopener noreferrer">
			깃허브 (github)
		</a>
		<a class="link" style="background-image: url({insta});"
			href="https://instagram.com/_wooncloud"
			target="_blank" rel="noopener noreferrer">
			인스타 (instagram)
		</a>
		<a class="link" style="background-image: url({insta});"
			href="https://instagram.com/dosiowl_official"
			target="_blank" rel="noopener noreferrer">
			도시부엉 인스타<br>(dosiowl instagram)
		</a>
		<a class="link" style="background-image: url({link});"
			href="https://litt.ly/dosiowl"
			target="_blank" rel="noopener noreferrer">
			도시부엉 리틀리<br>(dosiowl littly)
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
		text-align: center;
	}

	.link:hover {
		background-color: lightgray;
	}

	.link:active {
		background-color: dimgray;
		color: white;
	}
</style>