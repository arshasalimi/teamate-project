import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../Services/api";

export default function Populer() {
    const [product, setProduct] = useState([])
    console.log(product);

    useEffect(() => {
        Api.get("/products?limit=200")
            .then(res => setProduct(res.data.products))
        console.log(product)
    }, [])

    return (
        <div className="w-[90%] mb-8 text-center ml-[115px] ">
            <p className="text-[40px] mb-14 mr-24">محصولات محبوب</p>
            <div className="flex justify-around gap-[3%] w-[95%] items-start cursor-pointer">
                {product
                 .filter(item => item.id >= 148 && item.id <= 153)
                .map((item) => (
                    <div key={item.id} className="flex flex-col justify-between items-center text-center transition-transform hover:scale-105 ">
                        <div className="w-[99%] aspect-square rounded-full flex items-center justify-center bg-[#00424F59] shadow-xl">
                            <img src={item.images} alt={item.title} className="w-[100%] h-[100%]"/>
                        </div>
                        <p className="text-[18px] mt-3">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
