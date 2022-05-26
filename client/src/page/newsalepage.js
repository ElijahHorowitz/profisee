import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

function NewSale() {

    const [productName, setProductName] = useState("");
    const [salesPersonName, setSalesPersonName] = useState("");
    const [customerName, setCustomerName] = useState("");


    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        try {
            const response = await axios.get('/products');
            const jsonData = await response.data;

            console.log(jsonData);
            setProduct(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);
    let prod = product.map((pro) => {
        return (
            <option value={pro.name}>{pro.name}</option>
        )
    })

    const [salesperson, setSalesPerson] = useState([]);

    const getSalesPerson = async () => {
        try {
            const response = await axios.get('/salespersons');
            const jsonData = await response.data;

            console.log(jsonData);
            setSalesPerson(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getSalesPerson();
    }, []);

    let sale = salesperson.map((sal) => {
        return (
            <option value={[sal.lname, sal.fname]}>{sal.lname}, {sal.fname}</option>
        )
    })
    const [customer, setCustomer] = useState([]);

    const getCustomer = async () => {
        try {
            const response = await axios.get('/customers');
            const jsonData = await response.data;

            console.log(jsonData);
            setCustomer(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getCustomer();
    }, []);

    let cust = customer.map((cus) => {
        return (
            <option value={[cus.lname, cus.fname]}>{cus.lname}, {cus.fname}</option>
        )
    })

    const [selectedDate, setSelectedDate] = useState("");

    async function handleSaveClick() {

        let newSale = {
            product: productName,
            salesPerson: salesPersonName,
            customer: customerName,
            saleDate: selectedDate,
        };
        console.log(newSale);
        try {
            let res = await axios.post('/sales', newSale);
            console.log(res.data);

        } catch (err) {
            console.error(err);
        }
    }

    function handleCancel() {
        window.location.replace('/sales');
    }

    return (
        <div className="text-white py-4 w-1/3 px-4 ">
            <div class="mb-6">
                <div class="">
                    <div class="mb-3 xl:w-70">
                        Product
                        <select class="form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(event) => { setProductName(event.target.value) }}>
                            <option selected> Click To Select A Product</option>
                            {prod}
                        </select>
                    </div>
                </div>
                <div class="">
                    <div class="mb-3 xl:w-70">
                        Sales Person
                        <select class="form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(event) => { setSalesPersonName(event.target.value) }}>
                            <option selected> Click To Select A Sales Person</option>
                            {sale}
                        </select>
                    </div>
                </div>
                <div class="">
                    <div class="mb-3 xl:w-70">
                        Customer
                        <select class="form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(event) => { setCustomerName(event.target.value) }}>
                            <option selected> Click To Select A Customer</option>
                            {cust}
                        </select>
                    </div>
                </div>
                <div>
                    Sale Date
                    <div class="">
                        <div className="mb-3 xl:w-70">
                            <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"/>
                            <input
                                type="text"
                                class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                onChange={(event) => setSelectedDate(event.target.value)}
                                placeholder="Date mm/dd/yyyy"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 w-2/5 py-4">
                    <button
                        type="button"
                        onClick={function () {
                            handleSaveClick();
                        }}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={function () {
                            handleCancel();
                        }}
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewSale;