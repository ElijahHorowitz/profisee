import React from "react";
import SalePersonTable from "../components/salepersontable";
import { useSelector } from "react-redux";
import {Link, useHistory } from "react-router-dom";



function SalesPerson() {

    const salesPerson = useSelector((state) => state.salesPerson);

    return(
        <div className="h-full w-screen flex justify-center">

            <div className="flex-col w-8/12 h-full">
                <h2 className="text-xl text-white flex justify-center py-3">Sales Person</h2>
                <SalePersonTable/>
            </div> 

        </div>
    )
}

export default SalesPerson;