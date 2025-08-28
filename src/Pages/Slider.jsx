import { useEffect, useState } from "react";
import Icon from "../component/ui/Icon/Icon";
import Api from "../Services/api";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


export default function SwiperSlide1() {
    const [product, setProduct] = useState([])
    console.log(product);
    const swiper = useSwiper();


    useEffect(() => {
        Api.get("/products?limit=200")
            .then(res => setProduct(res.data.products))
        console.log(product)
    }, [])

    return (
        <div className="w-full h-[60vh] mt-24 flex justify-center mb-[95px]">
            <div className="w-[85.5%] rounded-[30px] bg-yellow-400 rtl flex h-[105%]">
                <div className="w-[16%] h-[55vh] bg-yellow-400 rounded-[30px] flex flex-col justify-center rtl">
                    <div className=" mr-[15px]">
                        <Icon name={"discount"} />
                        <p className="text-[39px]  cursor-default">تخفیفات ویژه</p>
                        <p className="text-[20px] cursor-pointer transition-transform hover:scale-105 hover:text-orange-600">مشاهده همه</p>
                    </div>
                </div>
                <button onClick={() => swiper.SlideNext()} className="prev">
                    <Icon name={"next"} />
                </button>
                <Swiper
                    slidesPerView={4}
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next'
                    }}
                    autoplay={{
                        delay:3000
                    }}
                    loop
                    spaceBetween={20}
                    className="w-[90%] h-[53vh]  bg-yellow-400 rounded-[35px] flex justify-around items-center mt-[56px] -ml-[25px] overflow-hidden"
                >
                    {product
                        .slice(138, 143)
                        .map((item) => (
                            <SwiperSlide className="bg-white border cursor-pointer  rounded-[13px] w-[23%] h-[20%] ml-16 flex flex-col items-start p-2 justify-between shadow-xl transition-transform hover:scale-105">

                                <Link to={"/products"} key={item.id} className="">

                                    <div className="">
                                        <img
                                            src={item.images}
                                            alt={item.title}
                                            className="w-[100%] h-[100%]"
                                        />
                                    </div>

                                    <h2 className="text-sm font-medium text-end">{item.title}</h2>

                                    <div className="flex items-center justify-between w-full">
                                        <div className="">
                                            <p className="text-orange-300 mt-2 rtl text-2xl">
                                                {item.price} دلار
                                            </p>
                                            <p className="line-through" >
                                                {item.discountPercentage} دلار
                                            </p>
                                        </div>
                                        <div className=" text-white px-4 py-2 rounded-lg hover:bg-orange-300 cursor-pointer ml=[50px]">
                                            <Icon name={"add-to-box"} />
                                        </div>
                                    </div>

                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className="flex items-center justify-center">
                    <button onClick={() => swiper.slidePrev()} className="prev">
                        <Icon name={"back"} />
                    </button>
                </div>
            </div>
        </div>
    )
}
