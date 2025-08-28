import React, { useState } from "react";
import Icon from "../component/ui/Icon/Icon";

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-[85%]  ml-[95px] p-6  text-gray-800">

      <div className="mb-6 border-b border-gray-200 flex gap-8 text-[30px] rtl h-[50px] w-full">
        <button
          onClick={() => setActiveTab("description")}
          className={` ${activeTab === "description" ? "border-b-[3px] border-amber-400 text-amber-300" : "text-black"}`}>
          توضیحات
        </button>
        <button
          onClick={() => setActiveTab("specs")}
          className={` ${activeTab === "specs" ? "border-b-[3px] border-amber-400 text-amber-300" : "text-black"}`}>
          مشخصات
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={` ${activeTab === "reviews" ? "border-b-[3px] border-amber-400 text-amber-300" : "text-black"}`}>
          نظرات
        </button>
      </div>

      {activeTab === "description" && (
        <div className="bg-white rounded-lg p-6 shadow-sm rtl">
          <p className=" text-[34px] mb-2">کفش زنانه کوهنوردی کینگتکس مدل DENA Kingtex</p>
          <p className="text-[32px]  text-gray-700">
            کفش کینگتکس مدل DENA مناسب برای پیاده روی طولانی مدت بر روی زمین با پوشش های مختلف است. رویه این کفش از چرم است
            که علاوه بر دوام بالا، ظاهر زیبایی را نیز به این کفش داده است. به منظور حفاظت انگشتان پا در جلوی این کفش از راپر استفاده شده است. پارچه KINGTEX پارچه ای با تکنولوژی جدید و پیشرفته است که ضمن دوام بالا و تنفس پذیر بودن
            قابلیت های ضدآب، ضدباد بودن را نیز دارد. این تکنولوژی عرق را به سمت بیرون هدایت کرده و پا را خشک و راحت نگه می دارد.
          </p>
        </div>
      )}


      {activeTab === "specs" && (
        <div className="w-[100%] bg-white  rounded-2xl p-6">
          <ul className="divide-y divide-gray-200 rtl text-[23px]">
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-600">نام برند</span>
              <span className="font-medium text-gray-800">Kingtex، کینگتکس</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-600">کاربرد</span>
              <span className="font-medium text-gray-800">کوه‌نوردی چند روزه</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-600">جنس رویه</span>
              <span className="font-medium text-gray-800">نوبوک (چرم طبیعی گاو)</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-600">نوع کف</span>
              <span className="font-medium text-gray-800">معمولی</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-600">جنس زیره</span>
              <span className="font-medium text-gray-800">Vibram</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-600">وزن</span>
              <span className="font-medium text-gray-800">640 گرم</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-600">خاصیت ضد آب</span>
              <span className="font-medium text-gray-800">دارد</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-600">سایر ویژگی‌ها</span>
              <span className="font-medium text-gray-800">
                دارای لایه تنفسی KINGTEX
              </span>
            </li>
          </ul>
        </div>
      )}


      {activeTab === "reviews" && (
        <div className="w-[100%]  bg-white p-4 rounded-xl rtl mb-7">
          <div className="flex items-center justify-start gap-[75px] ltr">
            <p className="text-[40px]">4.2</p>
            <div className="flex gap-4">
              <Icon name={"gray-star"} />
              <Icon name={"big-star"} />
              <Icon name={"big-star"} />
              <Icon name={"big-star"} />
              <Icon name={"big-star"} />
            </div>
          </div>

          <div className="-mt-20">
            <div className="mt-6 pb-3">
              <div className="flex text-sm">
                <Icon name={"profile"} />
                <p className="text-[20px]">مانیا رحیمی</p>
                <p className="text-gray-400">دیروز</p>
                <div className="flex gap-1">
                  <Icon name={"star"} />
                  <Icon name={"star"} />
                  <Icon name={"star"} />
                  <Icon name={"star"} />
                  <Icon name={"smal-gray-star"}/>
                </div>
              </div>
              <p className="mt-2 text-black text-[25px]">کیفیت خوبی داره، قابل قبوله</p>
              <p className="text-[#000000CC] text-[20px]">پاسخ</p>
            </div>

            <div className="w-[60%]">
              <hr className="text-black" />
            </div>

            <div className="mt-4  pb-3">
              <div className="flex text-sm">
                <Icon name={"profile"} />
                <p className="text-[20px]">مریم اکبری</p>
                <p className="text-gray-400">دیروز</p>
                <div className="flex gap-1">
                  <Icon name={"star"} />
                  <Icon name={"star"} />
                  <Icon name={"star"} />
                  <Icon name={"star"} />
                  <Icon name={"smal-gray-star"}/>
                </div>
              </div>
              <p className="mt-2 text-black text-[25px]">
                در کل خوبه ولی اگه یکم بیشتر هزینه کنید جنس بهتری گیرتون میاد.
              </p>
              <p className="text-[#000000CC] text-[20px]">پاسخ</p>
            </div>


            <div className="mt-4 mr-10">
              <div className="flex text-sm ">
                <Icon name={"profile"} />
                <p className="text-[20px] ">سارا بهرامی</p>
                <p className="text-gray-400">دیروز</p>
                <div className="flex gap-1">
                  <Icon name={"star"} />
                  <Icon name={"star"} />
                  <Icon name={"star"} />
                  <Icon name={"star"} />
                  <Icon name={"smal-gray-star"}/>
                </div>
              </div>
              <p className="mt-2 text-black text-[25px]">
                برای کوه های بلند و مسافت های طولانی مناسبه؟
              </p>
              <p className="text-[#000000CC] text-[20px]" >پاسخ</p>
            </div>
          </div>

        </div>
      )}
      <div className="border-dashed">
        <hr/>
      </div>
    </div>
  );
}


