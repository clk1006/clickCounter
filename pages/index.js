import { useState, useEffect } from 'react';
export default () => {
	const [ started, setStarted ] = useState(false);
	const [ clicks, setClicks ] = useState(0);
	const [ ended, setEnded ] = useState(false);
	useEffect(
		() => {
			if (started) {
				setClicks(0);
				setTimeout(() => {
					setStarted(false);
					setEnded(true);
				}, 5000);
			}
		},
		[ started ]
	);

	return (
		<div className="root">
			<h1>The click detector</h1>
			<button
				onClick={(event) => {
					if (!started && !ended) {
						setStarted(true);
					} else if (started) {
						setClicks(clicks + 1);
					}
				}}
			>
				{!started && !ended && 'Click me to start and play the game for five seconds'}
				{started && 'Click me!!!'}
				{ended && 'Reload to play again'}
			</button>
			{ended && (
				<div>
					<h2>
						Clicks: {clicks}
						<br />Clicks per Second: {clicks / 5}
					</h2>
					<button
						onClick={(event) => {
							setStarted(false);
							setEnded(false);
						}}
					>
						Restart the game
					</button>
				</div>
			)}
			)}
			<style jsx>{`
				:global(body) {
					background: lightgrey;
				}
				h1 {
					text-align: center;
					color: darkblue;
					font-size: 5vw;
				}
				.root {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
				h2 {
					text-align: center;
					color: darkpink;
					font-size: 3vw;
				}
				button {
					background: lightgreen;
					color: red;
					font-size: 400%;
					width: 50vw;
					margin-left: 25vw;
					height: 20vh;
				}
			`}</style>
		</div>
	);
};
