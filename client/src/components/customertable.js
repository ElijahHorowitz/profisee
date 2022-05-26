import axios from "axios";
import React, {useEffect, useState} from "react";




function CustomerTable() {
    var productIndex = 0;

	const [customer, setCustomer] = useState([]);

	const getCustomer = async () => {
		try {
			const response = await axios.get('/customers');
			const jsonData = await response.data;

			console.log(jsonData);
			setCustomer(jsonData);
		}catch(err){
			console.error(err.message);
		}
	}

	useEffect(() => {
		getCustomer();
	}, []);

	let cusRow = customer.map((cus) => {
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
					{cus.fname}
				</th>
				<th scope ="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{cus.lname}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{cus.address}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{cus.phone}
				</th>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{cus.startdate}
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
					</tr>
				</thead>
				<tbody>{cusRow}</tbody>
			</table>
		</div>
	);
}
export default CustomerTable;