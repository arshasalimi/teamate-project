import Icon from "./Icon/Icon";

export default function Header() {

    return (
    <header className="w-full h-16 bg-white flex items-center justify-between px-6 rtl ">
      
      <div className="flex items-center w-11 mr-10">
        <Icon name={"logo"}/>
      </div>

      
      <navbar className="flex items-center gap-8 text-gray-700 text-base ml-96">
        <a href="#" className="hover:text-orange-500 ">صفحه اصلی</a>
        <a href="#" className="hover:text-orange-500 ">محصولات</a>
        <a href="#" className="hover:text-orange-500 ">فروش ویژه</a>
        <a href="#" className="hover:text-orange-500 ">درباره ما</a>
      </navbar>

      
      <div className="flex items-center gap-5">
        
        <button className="flex items-center gap-4 border border-orange-400 text-gray-700 px-4 h-14cd  rounded-md hover:bg-orange-400 hover:text-white">
         <Icon name={"login"}/> ورود/ثبت نام
        </button>

        
        <div className="ml-16 w-5">
            <Icon name={"shop-box"}/>
        </div>
      </div>
    </header>
  );
}