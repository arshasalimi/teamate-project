import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../Services/api";

export default function Populer() {
    const [product, setProduct] = useState([])
    console.log(product);

    useEffect(() => {
        console.log(Api)
        Api.get("/products?limit=6")
            .then(res => setProduct(res.data.products))
        console.log(product)
    }, [])

    return (
        <section className="w-[90%] ml-[20px] mb-8 text-center">
            <h2 className="text-[40px]  ml-[90px] mb-14">محصولات محبوب</h2>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[5%] w-[100%]  ml-[50px] justify-around cursor-pointer">
                {product.map((product) => (
                    <div key={product.id} className="flex flex-col items-center text-center">

                        <div className="w-[100%] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-100 shadow-lg">
                            <img
                                src={product.images}
                                alt={product.title}
                                className="w-[90%] h-[90%]"
                            />
                        </div>


                        <p className="text-[18px] mt-3">
                            {product.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
