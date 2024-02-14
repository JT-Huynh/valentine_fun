import { useState } from 'react';
import { getRandomNumber } from './utils';
import { ACTION_GIF } from './constants';

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
		<div className="flex w-screen h-screen justify-center items-center overflow-hidden">
			<div className="text-center font-sans flex flex-col justify-center gap-8 items-center">
				<img
					className="h-60 rounded transition-all"
					src={actionGif}
					alt="gif"
				/>
				<h1 className="text-black text-3xl tracking-widest font-semibold">
					{!isAccepted ? 'Will you be my valentine ?' : 'Yayyy !'}
				</h1>
				{!isAccepted && (
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
				)}
			</div>
		</div>
	);
}

export default App;
