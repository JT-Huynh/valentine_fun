function App() {
	return (
		<div className="flex w-screen h-screen justify-center items-center">
			<div className="text-center font-sans flex flex-col justify-center gap-8 items-center">
				<img
					className="h-60 rounded"
					src="https://media.giphy.com/media/tLcf4s4DK3tZmYUn6F/giphy.gif?cid=790b7611j3h900kkqj9lbfnxatg983e5dsd3k0l1ezx9x564&ep=v1_gifs_search&rid=giphy.gif&ct=g"
					alt="ton-of-lov-gif"
				/>
				<h1 className="text-black text-3xl tracking-widest font-semibold">
					Will you be my valentine ?
				</h1>
				<div className="text-white transition-all">
					<button
						className="bg-teal-500 hover:bg-teal-700 hover:ring ring-teal-300  py-2 px-6 w-20 rounded mx-4"
						type="button"
					>
						Yes
					</button>
					<button
						className="bg-red-500 hover:bg-red-700 hover:ring ring-red-300 py-2 px-6 w-20 rounded mx-4"
						type="button"
					>
						No
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
