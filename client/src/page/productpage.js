import React from "react";
import ProdcutTable from "../components/producttable";
import ProModalEdit from "../components/editproductmodal";
import { useSelector } from "react-redux";
import {Link, useHistory } from "react-router-dom";



function Product() {

    function handleAdd() {
        window.location.replace('/addproduct')       
    }
    const products = useSelector((state) => state.products);
    let editModal = products.map((pro) => {
        return(
            <React.Fragment>
                <ProModalEdit/>
            </React.Fragment>
        )
    })

    const edits = <ProModalEdit/>

    return(
        <div className="h-full w-screen flex justify-center">
            <div className="flex-col w-8/12 h-full">
            <h2 className="text-xl text-white flex justify-center py-3">Products</h2>
                <ProdcutTable/>
                <div className="flex justify-end px-4 py-4">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-l px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={ function(){
                        window.location.replace('/editproduct');
                    }}
                    > 
                        Edit Product
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default Product;