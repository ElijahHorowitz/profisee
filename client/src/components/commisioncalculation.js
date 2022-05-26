import React, { useEffect, useState } from 'react';
import axios from 'axios';


function HandleCommision(props) {
    let price=0;
    let comm=0;
    let retNum = 0;
    var name = document.getElementById(`product${props.saleId}`);
    console.log(props.saleId);
    console.log(props.product);
    const [product, setProduct] = useState([]);

    const getCommision = async () => {
        try {
            const res = await axios.get(`/products/${props.product}`);
            const jsonData = await res.data;
            console.log(jsonData);
            setProduct(jsonData);
            
        } catch (err) {
            console.error(err.message);
        }    
        
    }

    useEffect(() =>{
        getCommision();
    }, []);
    let prod = product.map((pro) =>{
        price += pro.purchasePrice;
        comm += pro.commisionPercentage
    })
    retNum += price/comm;
    return (
        <th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            $ {retNum.toFixed(2)}
        </th>
    )
}
export default HandleCommision;