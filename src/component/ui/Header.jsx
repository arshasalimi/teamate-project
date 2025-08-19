import Icon from "./Icon/Icon";

export default function Header() {

  return (
    <header className="w-full h-20 bg-white flex items-center justify-between px-6 rtl ">

      <div className="flex items-center w-16 -ml-10 mr-6">
        <Icon name={"logo"} />
      </div>


      <navbar className="flex items-center  gap-8 text-gray-700 text-base ml-96 ">
        <a href="#" className="hover:text-orange-500 text-[22px] transition-transform hover:scale-x-105">صفحه اصلی</a>
        <a href="#" className="hover:text-orange-500 text-[22px] transition-transform hover:scale-x-105">محصولات</a>
        <a href="#" className="hover:text-orange-500 text-[22px] transition-transform hover:scale-x-105">فروش ویژه</a>
        <a href="#" className="hover:text-orange-500 text-[22px] transition-transform hover:scale-x-105">درباره ما</a>
      </navbar>


      <div className="flex items-center gap-5">

        <button className="flex items-center justify-center gap-4 mr-16 border-[2px] border-orange-300 text-gray-700 px-4 h-16cd text-[19px]  rounded-md h-12 ml-10 transition-transform hover:scale-x-105 hover:bg-orange-400 ">
          <Icon name={"login"} /> ورود/ثبت نام
        </button>


        <div className="ml-20 -mr-12 w-5 transition-transform hover:scale-x-105">
          <Icon name={"shop-box"} />
        </div>
      </div>

    </header>
  );
}