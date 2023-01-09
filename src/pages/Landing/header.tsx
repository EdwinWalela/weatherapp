const Header = () => {
	return (
		<div className="flex-1 ">
			<div className="flow-root p-6 px-10">
				<div className="float-left">
					<h2 className="font-bold text-2xl">January</h2>
					<p className="text-gray-500 text-sm">Thursday, Jan 4 2022</p>
				</div>
				<div className="float-right">
					<input
						className="bg-gray-100 rounded-md p-2 text-md tracking-wider"
						placeholder="Search location here"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
