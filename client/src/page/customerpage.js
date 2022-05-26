import React from "react";
import CustomerTable from "../components/customertable";





function CustomerPage() {

    return(
        <div className="h-full w-screen flex justify-center">
            <div className="flex-col w-8/12 h-full">
            <h2 className="text-xl text-white flex justify-center py-3">Customer</h2>
                <CustomerTable/>
            </div> 

        </div>
    )
}

export default CustomerPage;