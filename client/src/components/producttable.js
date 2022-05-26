import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import EditProduct from "../page/editproductpage";
import ProModalEdit from "./editproductmodal";



function ProdcutTable() {
    var productIndex = 0;
  
	const [product, setProduct] = useState([]);

	const getProduct = async () => {
		try {
			const response = await axios.get('/products');
			const jsonData = await response.data;

			console.log(jsonData);
			setProduct(jsonData);
		}catch(err){
			console.error(err.message);
		}
	}

	useEffect(() => {
		getProduct();
	}, []);



	let proRow = product.map((pro) => {
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
					{pro.name}
				</th>
				<th scope ="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{pro.manufacturer}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{pro.style}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					$ {pro.purchasePrice}
				</th>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					$ {pro.salePrice}
				</th>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{pro.quantity}
				</th>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{pro.commisionPercentage} %
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
							Name
						</th>
						<th scope="col" className="px-2 py-4">
							Manufacturer
						</th>
						<th scope="col" className="px-2 py-4">
							Style
						</th>
						<th scope="col" className="px-2 py-4">
							Purchase Price
						</th>
						<th scope="col" className="px-2 py-4">
							Sale Price
						</th>
                        <th scope="col" className="px-2 py-4">
							Quantity
						</th>
                        <th scope="col" className="px-2 py-4">
							Commision Percent
						</th>
					</tr>
				</thead>
				<tbody>{proRow}</tbody>
			</table>
		</div>
	);
}
export default ProdcutTable;