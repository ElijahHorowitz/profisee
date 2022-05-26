import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

function EditProduct() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [manufacturerName, setManufacturer] = useState("");
    const [styleName, setStyle] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [salePrice, setSalePrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [commisionPercentage, setCommisionPercentage] = useState("");


    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        try {
            const response = await axios.get('/products/');
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
            <option value={pro._id}>{pro.name}</option>
        )
    })

    async function handleSaveClick() {
        let editproduct = {
            product: productName,
            manufacturer: manufacturerName,
            style: styleName,
            purchasePrice: purchasePrice,
            salePrice: salePrice,
            quantity: quantity,
            commisionPercentage: commisionPercentage
        };
        console.log(productId);
        try {
            let res = await axios.put(`/products/${productId}`, editproduct);
            console.log(res.data);
            window.location.replace('/products')
        } catch (err) {
            console.error(err);
        }
    
    }
    function handleCancel() {
        window.location.replace('/products');
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
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(event) => { setProductId(event.target.value) }}>
                            <option selected> Click To Select A Product to edit</option>
                            {prod}
                        </select>
                    </div>
                </div>
                    <div class="">
                        <div class="mb-3 xl:w-70">
                            Product Name
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
                                onChange={(event) => setProductName(event.target.value)}
                                placeholder="Product Name"
                            />
                        </div>
                    </div>
                <div class="">
                    <div class="mb-3 xl:w-70">
                        Chose A Manufacturer
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
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(event) => { setManufacturer(event.target.value) }}>
                            <option selected> Click To Select A Manufacturer</option>
                            <option value={"Trek"}>Trek</option>
                            <option value={"Mongoose"}>Mongoose</option>
                            <option value={"Giant"}>Giant</option>
                        </select>
                    </div>
                </div>
                <div class="">
                    <div class="mb-3 xl:w-70">
                        Chose A Style
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
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(event) => { setStyle(event.target.value) }}>
                            <option selected> Click To Select A Style</option>
                            <option value={"Moutain"}>Moutain</option>
                            <option value={"Road"}>Road</option>
                            <option value={"BMX"}>BMX</option>
                        </select>
                    </div>
                </div>
                    <div class="">
                        <div class="mb-3 xl:w-70">
                            Purchase Price
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
                                onChange={(event) => setPurchasePrice(event.target.value)}
                                placeholder="$000"
                            />
                        </div>
                    </div>
                <div>
                    
                    <div class="">
                        <div class="mb-3 xl:w-70">
                            Sale Price
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
                                onChange={(event) => setSalePrice(event.target.value)}
                                placeholder="$000"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    
                    <div class="">
                        <div class="mb-3 xl:w-70">
                            Quantity
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
                                onChange={(event) => setQuantity(event.target.value)}
                                placeholder="0"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    
                    <div class="">
                        <div class="mb-3 xl:w-70">
                            Commision Percentage
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
                                onChange={(event) => setCommisionPercentage(event.target.value)}
                                placeholder="0"
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

export default EditProduct;