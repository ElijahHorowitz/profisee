import axios from "axios";
import React, {useEffect, useState} from "react";
import HandleCommision from "./commisioncalculation";





function SalesTable() {
    var productIndex = 0;

	const [sale, setSale] = useState([]);

	const getSales = async () => {
		try {
			const response = await axios.get('/sales');
			const jsonData = await response.data;

			console.log(jsonData);
			setSale(jsonData);
		}catch(err){
			console.error(err.message);
		}
	}

	useEffect(() => {
		getSales();
	}, []);

	let salRow = sale.map((sal) => {
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
					{sal.product}
				</th>
				<th scope ="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{sal.salesPerson}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{sal.customer}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{sal.saleDate}
				</th>
                <HandleCommision saleId={sal._id} product={sal.product}/>
			</tr>
		);
	});

	return (
		<div className="mt-10 relative  shadow-md sm:rounded-lg h-full overflow-visible">
			<table className="w-full text-sm text-center text-gray-500 dark:text-gray-50">
				<thead className="text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-white-400 dark:bg-stone-800">
					<tr>
						<th scope="col" className="px-2 py-4">
							Product
						</th>
						<th scope="col" className="px-2 py-4">
							Sales Person
						</th>
						<th scope="col" className="px-2 py-4">
							Customer
						</th>
						<th scope="col" className="px-2 py-4">
							Sales Date
						</th>
                        <th scope="col" className="px-2 py-4">
							Commision
						</th>
					</tr>
				</thead>
				<tbody>{salRow}</tbody>
			</table>
		</div>
	);
}
export default SalesTable;