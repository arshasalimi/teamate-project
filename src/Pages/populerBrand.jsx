const data = [
    {
        id: 1,
        img: "populerBrands/1brand.jpg"
    },
    {
        id: 2,
        img:"populerBrands/2brand.jpg"
    },
    {
        id:3,
        img:"populerBrands/3brand.jpg"
    },
    {
        id:4,
        img: "populerBrands/4brand.jpg"
    },
    {
        id:5,
        img: "populerBrands/5brand.jpg"
    }
]

function PopulerBrand() {
    return (
        <div className="-mt-[115px]">
            <p className="flex justify-center items-center text-[40px] mr-[42px] mb-10">محبوب ترین برند ها</p>
            <div className="w-full h-[30vh]  mb-40 flex  justify-evenly">
                {data.map((item) => (
                    <img src={item.img} className="transition-transform hover:scale-105"></img>
                ))}
            </div>

        </div>
    )

}

export default PopulerBrand;