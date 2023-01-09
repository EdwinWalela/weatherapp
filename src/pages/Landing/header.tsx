import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const now = new Date();
	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let monthsShort = [
		'Jan',
		'Feb',
		'March',
		'April',
		'May',
		'June',
		'July',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec',
	];
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let month = months[now.getMonth()];
	let monthShort = monthsShort[now.getMonth()];
	let day = days[now.getDay()];
	return (
		<div className="flex-1 ">
			<div className="flow-root ">
				<div className="float-left">
					<h2 className="font-bold text-2xl">{month}</h2>
					<p className="text-gray-500 text-sm">
						{day}, {monthShort} {now.getDate()} {now.getFullYear()}
					</p>
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
