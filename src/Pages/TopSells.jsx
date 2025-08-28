import React, { useEffect, useState } from "react";
import Api from "../Services/api";
import Icon from "../component/ui/Icon/Icon";
import {  NavLink } from "react-router-dom";

function TopSells() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Api.get("/products?limit=210")
            .then(res => setProducts(res.data.products))
    }, [])

    return (
        <div className="mb-44 p-6">
            <p className=" text-right text-[40px]  mr-[90px] mb-[52px]"> پر فروش ترین محصولات</p> 
            <div className="text-left text-[25px]  ml-[90px] mb-[50px] mt-[-92px] text-[#000000CC] cursor-pointer">
            <NavLink to={"/products"}>بیشتر</NavLink>

            </div>
            <div className="flex gap-6 flex-wrap justify-center">
                {products
                    .slice(110,115)
                    .map((item) => (

                        <NavLink to={"/productdetail"} key={item.id} className="border rounded-[13px] w-60 flex flex-col items-start p-2 justify-between shadow-xl transition-transform hover:scale-105">
                            <div className="">
                                <img
                                    src={item.images}
                                    alt={item.title}
                                    className="w-[100%] h-[100%]  mb-3"
                                />
                            </div>
                            <h2 className="text-sm font-medium text-start">{item.title}</h2>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-black mt-2 rtl">
                                    {item.price} دلار
                                </p>
                                <div className="mt-3 text-white px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer">
                                    <Icon name={"add-to-box"} />
                                </div>
                            </div>
                        </NavLink>
                    ))}
            </div>
        </div>
    );
}

export default TopSells;