import { useEffect, useState } from "react";
import Api from "../Services/api";


function ProductsApiPage() {
    const [Products, setProducts] = useState([])
    useEffect(() => {
        Api.get("/products?limit=100")
            .then(res => setProducts(res.data.products))
            console.log(Products);
            
    }, [])
    return (
        <>
        </>
    )
}
export default ProductsApiPage;