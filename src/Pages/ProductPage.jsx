import { useState } from "react";
import Icon from "../component/ui/Icon/Icon"
import ProductsApiPage from "./ProductsApiPage";
function ProductPage() {
    const [search, setSearch] = useState('');
    const searchHandler = (value) => {
        setSearch(value)
        
    }
    return (
        <>

            <div className="w-full h-[170px] flex justify-center items-center">
                <div className="w-[77%] h-[49%] flex justify-end bg-gray-400 rounded-[10px]">
                    <input type="search" placeholder="محصول مورد نظر را جستجو کنید" value={search} onChange={(e) => setSearch(e.target.value)} className="w-[92%] rtl text-[32px] border-none placeholder:text-black outline-none rounded-[10px] text-black bg-gray-400" />
                    <div className="w-[8%] flex items-center ml-5">
                        <Icon name="search" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-[77%] rtl flex items-end">
                    <div className="mb-2 mr-2 flex">
                        <Icon name="amar" />
                        <p className="rtl mr-3 mb-1 text-[22px]">مرتب سازی :</p>
                        <a href="#"><p className="mr-7 mb-1 text-[22px] transition-transform hover:scale-105 hover:text-[#F0C400]">جدیدترین</p></a>
                        <a href="#"><p className="mr-7 mb-1 text-[22px] transition-transform hover:scale-105 hover:text-[#F0C400]">پربازدیدترین</p></a>
                        <a href="#"><p className="mr-7 mb-1 text-[22px] transition-transform hover:scale-105 hover:text-[#F0C400]">ارزان ترین</p></a>
                        <a href="#"><p className="mr-7 mb-1 text-[22px] transition-transform hover:scale-105 hover:text-[#F0C400]">گران ترین</p></a>
                        <a href="#"><p className="mr-7 mb-1 text-[22px] transition-transform hover:scale-105 hover:text-[#F0C400]">پرفروش ترین</p></a>
                    </div>
                </div>
                <hr className="w-[77%] mb-2 border-2 border-[#00000066] rounded-[2px]" />
            </div>
            <div>
                <ProductsApiPage />
            </div>
        </>
    )
}
export default ProductPage;