import React, { useState } from 'react'
import "../css/form.css"
import ProductCard from './Product';

function Product({ data, setData }) {
    const [asc, setAsc] = useState(true);
    const [name,setName]=useState(false)
    function sortByQty() {
        if (asc) {
            data.sort((a, b) => a.qty - b.qty);
            setAsc(false);
            setData(data);
        }
        else {
            data.sort((a, b) => b.qty - a.qty);
            setAsc(true);
            setData(data);
        }
    }
    function sortByName() {
        const sorted = [...data].sort((a, b) =>
            name ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    
        setData(sorted);
        setName((prev) => !prev)

    }
    function sortByPrice() {
        if (asc) {
            data.sort((a, b) => a.price - b.price);
            setAsc(false);
        }
        else {
            data.sort((a, b) => b.price - a.price);
            setAsc(true);
        }
    }
    return (
        <>
            {data.length > 0 && (
                <div style={{ marginTop: "20px"}}>
                    <h3 style={{ textAlign: "center" }}>Products</h3>
                    <button onClick={sortByQty}>Sort by Qty</button>
                    <button onClick={sortByPrice}>Sort by Price</button>
                    <button onClick={sortByName}>Sort by Name</button>b
                    <ProductCard data={data}/>
                </div>
            )}
        </>
    )
}

export default Product