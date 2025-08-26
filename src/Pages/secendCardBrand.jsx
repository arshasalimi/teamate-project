import React from "react";

const cards = [
    {
        id: 1,
        title: "بهترین شلوار های کوهنوردی",
        button: "مشاهده",
        img: "cards/mounten-pants.jpg", 
    },
    {
        id: 2,
        title: "ست بدنسازیت رو از اینجا بگیر!",
        button: "مشاهده",
        img: "cards/sport.png", 
    },
    {
        id: 3,
        title: "یه مبارزه جذاب با بهترین دستکش ها",
        button: "مشاهده",
        img: "cards/box.png",   
    },
];

export default function Cards() {
    return (
        <div className="w-full flex justify-center gap-6 mb-16">
            {cards.map((card) => (
                <div key={card.id} className="relative w-[415px] h-[283px] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                    
                    <img src={card.img} alt={card.title}  className="w-full h-full object-cover"/>
  
                    <div className="bg-gradient-to-br"></div>
   
                    <div className="absolute bottom-[137px] right-4 text-white flex flex-col items-end gap-2">
                        <h3 className="text-lg ">{card.title}</h3>
                        <button className="bg-white/15 text-white text-sm px-4 py-1 rounded-full shadow-md hover:bg-gray-300 transition">
                            {card.button}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}