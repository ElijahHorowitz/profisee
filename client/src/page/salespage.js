import React from "react";
import SalesTable from "../components/salestable";


function SalesPage() {

    return(
        <div className="h-full w-screen flex justify-center">
            <div className="flex-col w-8/12 h-full">
            <h2 className="text-xl text-white flex justify-center py-3">Sales</h2>
                <SalesTable/>
                <div className="flex justify-end px-4 py-4">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-l px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={ function(){
                        window.location.replace('/newsales');
                    }}
                    > 
                        Create Sale
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default SalesPage;