import Icon from "../component/ui/Icon/Icon";

export default function NavSearch() {
    return (
        <div>
            <div className="w-full  h-full">
                <img src="/Nav-search/Nav-Search.png" className="w-full h-[95vh]  object-cover"></img>
            </div>
            <div className="flex justify-center items-center ">
                <input placeholder= "محصول مورد نظر خود را جستجو کنید..." type="search" className="rtl top-24 w-[65%] h-[17vh] -translate-y-[60%] rounded-[10px] text-[30px] shadow-2xl "></input>
                <div className="-translate-y-[10vh] -ml-12 ">
                <Icon name={"search"}/>
                </div>
            </div>
        </div>
    );
}
