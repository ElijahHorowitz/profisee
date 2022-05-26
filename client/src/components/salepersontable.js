import axios from "axios";
import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



function SalePersonTable() {
    var productIndex = 0;

	const [salesperson, setSalesPerson] = useState([]);

	const getSalesPerson = async () => {
		try {
			const response = await axios.get('/salespersons');
			const jsonData = await response.data;

			console.log(jsonData);
			setSalesPerson(jsonData);
		}catch(err){
			console.error(err.message);
		}
	}

	useEffect(() => {
		getSalesPerson();
	}, []);

	let salRow = salesperson.map((sal) => {
		var rowColor;

		if (productIndex++ % 2 === 0) {
			rowColor = "dark:bg-stone-700";
		} else {
			rowColor = "dark:bg-stone-600";
		}
		return (
			<tr className={`bg-white ${rowColor} `}>
				<th
					scope="row"
					className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
				>
					{sal.fname}
				</th>
				<th scope ="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{sal.lname}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{sal.address}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{sal.phone}
				</th>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{sal.startdate}
				</th>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{sal.terminationdate}
				</th>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{sal.manager}
				</th>
			</tr>
		);
	});

	return (
		<div className="mt-10 relative  shadow-md sm:rounded-lg h-full overflow-visible">
			<table className="w-full text-sm text-center text-gray-500 dark:text-gray-50">
				<thead className="text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-white-400 dark:bg-stone-800">
					<tr>
						<th scope="col" className="px-2 py-4">
							First Name
						</th>
						<th scope="col" className="px-2 py-4">
							Last Name
						</th>
						<th scope="col" className="px-2 py-4">
							Address
						</th>
						<th scope="col" className="px-2 py-4">
							Phone
						</th>
						<th scope="col" className="px-2 py-4">
							Start Date
						</th>
                        <th scope="col" className="px-2 py-4">
							Termination Date
						</th>
                        <th scope="col" className="px-2 py-4">
							Manager
						</th>
					</tr>
				</thead>
				<tbody>{salRow}</tbody>
			</table>
		</div>
	);
}
export default SalePersonTable;