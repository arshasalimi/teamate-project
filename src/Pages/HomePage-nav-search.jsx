import Icon from "../component/ui/Icon/Icon";
import { Link } from "react-router";

export default function NavSearch() {
    return (
        <div>
            <div className="w-full  h-full">
                <img src="/Nav-search/Nav-Search.png" className="w-full h-[95vh]  object-cover"></img>
            </div>
            <div className="w-full h-[220px] flex justify-center items-center -translate-y-[55%] rounded-[]">       
            <Link to={"/products"} className="w-[77%] h-[49%] flex justify-end rounded-[10px] ">
                <input placeholder= "محصول مورد نظر خود را جستجو کنید..." type="search" className="w-[92%] rtl text-[32px] border-none placeholder:text-black outline-none rounded-[10px] text-black shadow-2xl "></input>
                <div className="w-[8%] flex items-center mr-5 bg-white rounded-[10px]">
                <Icon name={"search"}/>
                </div>
            </Link>
            </div>
        </div>
    );
}

