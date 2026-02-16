import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function Products() {
    const { products, addToCart, cart,removeFromCart } = useContext(ProductContext)
    return (
        <>
            <div>
                {
                    products?.map((product) => {
                        return (
                            <div key={product.id}>
                                <h2>{product.title}</h2>
                                <h3>{product.price}</h3>
                                <p>{product.description}</p>
                                <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                                <br />
                                <hr />
                            </div>
                        )
                    })
                }
            </div>

            <h1>Cart Items</h1>
            {cart?.map((product) => {
                console.log({ product });
                return (
                    <div key={product.id}>
                        <h2>title:{product.title}</h2>
                        <h3>price: {product.price}</h3>
                        <p>description: {product.description}</p>
                        <p>quantity: {product.quantity}</p>
                                <button onClick={() => removeFromCart(product.id)}>Remove from cart</button>
                        <br />
                        <hr />
                    </div>
                )
            })}

        </>
    )
}

export default Products