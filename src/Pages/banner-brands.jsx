// Banners.jsx
import React from "react";

export default function Banners() {
    const banners = [
        {
            id: 2,
            title: "کوهنوردی آسان با بهترین باتوم‌ها",
            button: "مشاهده",
            image: "Populer-product/batom.png",
        },
        {
            id: 1,
            title: "به راحتی هرجایی آشپزی کنید!",
            subtitle: "با محصولات بولین",
            button: "مشاهده",
            image: "Populer-product/camping.png",
        },
    ];

    return (
        <div dir="rtl" className="w-[88%] ml-[92px] p-4 -mt-[95px]">
            <div className="grid gap-4 md:grid-cols-2">
                {banners.map((item) => (
                    <div key={item.id} className=" h-[35vh] w-[100%] rounded-[30px] overflow-hidden shadow-lg flex items-center justify-between px-6 bg-gradient-to-r from-[#426b33d6] to-[#2B4627]">
                        <div className="text-white">
                            <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="mt-1 text-sm opacity-90">{item.subtitle}</p>

                            <button className="mt-3 px-3 py-1 bg-white/20 rounded-full text-sm transition-transform hover:scale-105">
                                {item.button}
                            </button>
                        </div>
                        <img src={item.image} alt={item.title} className="w-[40%] transition-transform hover:scale-105"/>
                    </div>
                ))}
            </div>
        </div>
    );
}