import Lottie from 'lottie-react';
import { useState } from 'react';
import flyingHeart from './assets/flying_heart.json';
import { ACTION_GIF } from './constants';
import { getRandomNumber } from './utils';

function App() {
	const [isAccepted, setIsAccepted] = useState(false);
	const [isNoEnter, setIsNoEnter] = useState(false);
	const [noPostion, setNoPosition] = useState({ top: '0%', left: '0%' });
	const [actionGif, setActionGif] = useState(ACTION_GIF.normal);

	const handleNoEnter = () => {
		setIsNoEnter(true);

		const top = getRandomNumber(1, 90);
		const left = getRandomNumber(1, 90);
		setNoPosition({ top: `${top}%`, left: `${left}%` });
	};

	return (
		<div className="flex w-screen h-screen justify-center items-start  overflow-hidden">
			<div className="text-center font-sans flex flex-col justify-center mt-4 gap-10 items-center">
				<div className="relative">
					<img
						className="h-60 rounded transition-all"
						src={actionGif}
						alt="gif"
					/>
					{isAccepted && (
						<Lottie
							className="absolute top-0 left-0 -z-1"
							animationData={flyingHeart}
							loop={true}
						/>
					)}
				</div>
				<h1 className="text-black text-3xl tracking-widest font-semibold">
					{!isAccepted ? 'Will you be my valentine ?' : 'Yayyy !'}
				</h1>
				{!isAccepted ? (
					<div className="text-white transition-all">
						<button
							onClick={() => {
								setIsAccepted(true);
								setActionGif(ACTION_GIF.yes);
							}}
							className={`bg-teal-500 hover:bg-teal-700 hover:ring ring-teal-300 ${
								isNoEnter
									? 'py-6 px-12 w-40'
									: 'py-2 px-6 w-20 '
							}  rounded mx-4`}
							type="button"
						>
							Yes
						</button>
						<button
							onClick={() => {
								setActionGif(ACTION_GIF.no);
							}}
							onMouseEnter={handleNoEnter}
							className={`bg-red-500 hover:bg-red-700 hover:ring ring-red-300 py-2 px-6 w-20 rounded mx-4 ${
								isNoEnter ? `absolute` : ''
							}`}
							style={noPostion}
							type="button"
						>
							No
						</button>
					</div>
				) : (
					<svg
						className="fill-pink-400 animate-bounce h-20"
						viewBox="0 0 32 29.6"
					>
						<path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
					</svg>
				)}
			</div>
		</div>
	);
}

export default App;
