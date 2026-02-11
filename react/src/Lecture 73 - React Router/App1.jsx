import { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Products from "./components/Products"
import Product from "./components/Product"

function App() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
            setLoading(false)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <nav
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 40px",
                    background: "linear-gradient(90deg,#111827,#1f2937)",
                    color: "white",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "22px",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        margin:"0 auto"
                    }}
                >
                    ProductStore
                </Link>
            </nav>

            <div
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f3f4f6",
                    padding: "40px",
                    width:"95vw",
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<Products products={products} loading={loading} />}
                    />
                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </div>
        </>
    )
}

export default App
