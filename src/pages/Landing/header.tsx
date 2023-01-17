import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateLocation } from './weatherSlice';

const Header = () => {
	const [location, setLocation] = useState('');
	const dispatch = useAppDispatch();

	function handleLocationUpdate() {
		dispatch(updateLocation(location));
	}

	function handleLocationOnchange(e: React.FormEvent<HTMLInputElement>) {
		setLocation(e.currentTarget.value);
	}

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
			<div className="md:flow-root ">
				<div className="md:float-left text-center md:text-left">
					<h2 className="font-bold text-2xl">{month}</h2>
					<p className="text-gray-500 text-sm">
						{day}, {monthShort} {now.getDate()} {now.getFullYear()}
					</p>
				</div>
				<div className="md:float-right ">
					<input
						className="bg-gray-100 rounded-full py-2 pl-6 text-md tracking-wider mx-auto block md:inline md:mx-0"
						placeholder="Search location here"
						onChange={handleLocationOnchange}
					/>
					<FontAwesomeIcon
						icon={faSearch}
						className="md:ml-4 cursor-pointer relative md:right-14 md:left-0 left-60 bottom-8 md:bottom-0"
						onClick={handleLocationUpdate}
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
