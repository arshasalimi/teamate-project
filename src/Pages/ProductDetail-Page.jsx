import React, { useState } from "react";
import Icon from "../component/ui/Icon/Icon";
// px-4 py-1 w-[66px] h-[60px] border rounded-md


export default function ProductCard() {

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState('')
    function increase() {
        setQty(qty => qty + 1)
    }
    function decrease() {
        setQty(qty => qty - 1)
    }
    return (
        <div dir="rtl" className="w-full  bg-white p-6 text-right">

            <div className="mb-10 shadow-black bg-black">
                <hr />
            </div>

            <div className="flex gap-8">
                <div className="w-[600px] mr-[125px] -mt-[15px]">
                    <div className="border rounded-md p-5 shadow-xl" >
                        <img src="product-detail/shoos.jpg" alt="کفش" className="w-[90%] h-[500px] object-cover" />
                    </div>

                    <div className="flex gap-3 mt-4 w-[100%]">
                        <div className="w-[155px] h-[128px] border rounded-md ">
                            <img src="product-detail/small-blue.jpg" alt="t1" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[155px] h-[128px] border rounded-md overflow-hidden">
                            <img src="product-detail/small red.jpg" alt="t2" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[155px] h-[128px] border rounded-md overflow-hidden">
                            <img src="product-detail/small black.jpg" alt="t3" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[155px] h-[128px] border rounded-md overflow-hidden">
                            <img src="product-detail/small gray.jpg" alt="t4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>


                <div className="flex-1 -mt-5">
                    <p className="text-[40px]">کفش کوهنوردی زنانه کینگتکس مدل</p>
                    <p className="text-[40px]  mt-1">DENA</p>

                    <div className="text-3xl ">
                        <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                                <Icon name={"star"} />
                                <Icon name={"star"} />
                                <Icon name={"star"} />
                                <Icon name={"star"} />
                            </div>
                            <p className="text-[18px] text-[#000000BF]">(از 12 نظر)</p>
                        </div>
                        <p className="text-[55px] mt-[35px]" > ۲,۳۵۰,۰۰۰ تومان</p>
                    </div>


                    <div className="mb-5">
                        <div className="text-[30px] mb-6 mt-[55px]">رنگ کفش: آبی مشکی </div>
                        <div className="flex justify-start gap-3">
                            <button className="w-[48px] h-[48px] rounded-full  flex border  justify-center items-center bg-gradient-to-r from-black to-[#0037ff]"> <Icon name={"check"}/></button>
                            <button className="w-[48px] h-[48px] rounded-full  flex border bg-gradient-to-r from-black to-[#AD1E29]"></button>
                            <button className="w-[48px] h-[48px] rounded-full  flex border bg-gradient-to-r from-black to-[#3c307e]"></button>
                            <button className="w-[48px] h-[48px] rounded-full  flex bg-gradient-to-r from-black to-[#777777] "></button>
                        </div>
                    </div>


                    <div className="mb-7">
                        <div className="text-[30px]  mb-2 mt-[25px]">سایز کفش: {size}</div>
                        <div className="flex justify-start gap-2">
                            <button className={`size ${size == '38' ? 'px-4 py-1 w-[66px] h-[60px] border rounded-md text-[26px] bg-yellow-300' : 'px-4 py-1 w-[66px] h-[60px] border rounded-md text-[26px]'}`} onClick={() => setSize('38')}>38</button>
                            <button className={`size ${size == '39' ? 'px-4 py-1 w-[66px] h-[60px] border rounded-md text-[26px] bg-yellow-300' : 'px-4 py-1 w-[66px] h-[60px] border rounded-md text-[26px]'}`} onClick={() => setSize('39')}>39</button>
                            <button className={`size ${size == '40' ? 'px-4 py-1 w-[66px] h-[60px] border rounded-md text-[26px] bg-yellow-300' : 'px-4 py-1 w-[66px] h-[60px] border rounded-md text-[26px]'}`} onClick={() => setSize('40')}>40</button>
                            <button className={`size ${size == '41' ? 'px-4 py-1 w-[66px] h-[60px] border rounded-md text-[26px] bg-yellow-300' : 'px-4 py-1 w-[66px] h-[60px] border rounded-md text-[26px]'}`} onClick={() => setSize('41')}>41</button>
                        </div>
                    </div>


                    <div className="flex items-center gap-4 mt-[60px]">
                        <div className="flex items-center border rounded-[13px] w-[188px] h-[76px]">
                            <button onClick={decrease} className="px-4 py-2 w-[70px] text-[65px] mb-3">-</button>
                            <div className="px-5 py-2 border-x-[1px] text-[40px]">{qty}</div>
                            <button onClick={increase} className="px-4 py-2 w-[70px] text-[45px] mb-3">+</button>
                        </div>

                        <button className="bg-yellow-400  rounded-[15px] w-[412px] h-[76px] text-[35px] text-[#FFFFFF] transition-transform hover:scale-105">
                            افزودن به سبد خرید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}