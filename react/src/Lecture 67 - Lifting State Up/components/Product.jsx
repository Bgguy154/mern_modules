import React from 'react'
import "../css/form.css"

function ProductCard({ data }) {
    return (
        <>
            {data.map((user, index) => (
                <div
                    key={index}
                    className="product-card"
                >
                    <strong>Name:</strong>
                    <span>{user.name}</span>

                    <strong>Price:</strong>
                    <span>{user.price}</span>

                    <strong>Quantity:</strong>
                    <span>{user.qty}</span>

                    <strong>Description:</strong>
                    <span>{user.desc}</span>
                </div>
            ))}
        </>
    )
}

export default ProductCard