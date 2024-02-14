import { useState } from 'react';
import { getRandomNumber } from './utils';

function App() {
	const [isAccepted, setIsAccepted] = useState(false);
	const [isNoEnter, setIsNoEnter] = useState(false);
	const [noPostion, setNoPosition] = useState({ top: '0%', left: '0%' });

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
					src={
						!isAccepted
							? 'https://media.giphy.com/media/tLcf4s4DK3tZmYUn6F/giphy.gif?cid=790b7611j3h900kkqj9lbfnxatg983e5dsd3k0l1ezx9x564&ep=v1_gifs_search&rid=giphy.gif&ct=g'
							: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDB5Y3E0bTBpdDF2eGNraTMwcTZ3c3B5NGJxYnpyeGVhZmgwODZjciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5dUllWbKVlaqmMTvHb/giphy.gif'
					}
					alt="gif"
				/>
				<h1 className="text-black text-3xl tracking-widest font-semibold">
					{!isAccepted ? 'Will you be my valentine ?' : 'Yayyy !'}
				</h1>
				{!isAccepted && (
					<div className="text-white transition-all">
						<button
							onClick={() => setIsAccepted(true)}
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
