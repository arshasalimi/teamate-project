import Icon from "./Icon/Icon";
import {  NavLink } from "react-router-dom";
export default function Header() {

  return (
    <header className="w-full h-20 bg-white flex items-center justify-between px-6 rtl ">

      <div className="flex items-center w-16 -ml-10 mr-6">
        <Icon name={"logo"} />
      </div>


      <div className="flex items-center  gap-8 text-gray-700 text-base ml-96 ">
        <NavLink to={"/"} className="hover:text-orange-500 text-[22px] transition-transform hover:scale-x-105">صفحه اصلی</NavLink>
        <NavLink to={"/products"} className="hover:text-orange-500 text-[22px] transition-transform hover:scale-x-105">محصولات</NavLink>
        <NavLink to={"/products"} className="hover:text-orange-500 text-[22px] transition-transform hover:scale-x-105">فروش ویژه</NavLink>
        <NavLink className="hover:text-orange-500 text-[22px] transition-transform hover:scale-x-105">درباره ما</NavLink>
      </div>


      <div className="flex items-center gap-5">

        <button className="flex items-center justify-center gap-4 mr-16 border-[2px] border-orange-300 text-gray-700 px-4 h-16cd text-[19px]  rounded-md h-12 ml-10 transition-transform hover:scale-x-105 hover:bg-orange-400 ">
          <Icon name={"login"} /> ورود/ثبت نام
        </button>


        <NavLink to={"/"} className="ml-20 -mr-12 w-5 transition-transform hover:scale-x-105">
          <Icon name={"shop-box"} />
        </NavLink>
      </div>

    </header>
  );
}