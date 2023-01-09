import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<div className="flex-1 ">
			<div className="flow-root ">
				<div className="float-left">
					<h2 className="font-bold text-2xl">January</h2>
					<p className="text-gray-500 text-sm">Thursday, Jan 4 2022</p>
				</div>
				<div className="float-right">
					<input
						className="bg-gray-100 rounded-full py-2 pl-6 text-md tracking-wider"
						placeholder="Search location here"
					/>
					<FontAwesomeIcon icon={faSearch} className="ml-4 cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default Header;
