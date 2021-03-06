import { useState, useEffect } from 'react';
export default () => {
	const [ started, setStarted ] = useState(false);
	const [ clicks, setClicks ] = useState(0);
	const [ ended, setEnded ] = useState(false);
	const [ duration, setDuration ] = useState(5000);
	useEffect(
		() => {
			if (started) {
				setClicks(0);
				setTimeout(() => {
					setStarted(false);
					setEnded(true);
				}, duration);
			}
		},
		[ started ]
	);

	return (
		<div className="root">
			<h1>The click counter</h1>
			<label>Select duration of playing</label>
			<select
				onChange={(event) => {
					setDuration(event.target.value);
				}}
			>
				<option key="0" value="1000">
					1 second
				</option>
				<option key="1" value="5000">
					5 seconds
				</option>
				<option key="2" value="10000">
					10 seconds
				</option>
				<option key="3" value="60000">
					60 seconds
				</option>
				<option key="4" value="100000">
					100 seconds
				</option>
			</select>
			<button
				onClick={(event) => {
					if (!started && !ended) {
						setStarted(true);
					} else if (started) {
						setClicks(clicks + 1);
					}
				}}
			>
				{!started && !ended && 'Click me to start playing the game'}
				{started && 'Click me!!!'}
			</button>
			{ended && (
				<div>
					<h2>
						Clicks: {clicks}
						<br />Clicks per Second: {clicks / duration * 1000}
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
					font-size: 3vw;
					width: 50vw;
					margin-left: 25vw;
					height: 15vh;
				}
				select {
					font-size: 3vw;
					height: 10vh;
					color: darkred;
					width: 50vw;
					margin-left:25vw;
				}
				label {
					font-size: 3vw;
					color: darkred;
					text-align: center;s
				}
			`}</style>
		</div>
	);
};
