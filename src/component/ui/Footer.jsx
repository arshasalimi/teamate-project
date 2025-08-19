import Icon from "./Icon/Icon"

function Footer() {
    const first_footer_section = [
        {
            id: 1,
            text: "ارائه بهترین خدمات",
            image: "/public/footer-pro/trust.png"
        },
        {
            id: 2,
            text: "ارسال سریع به سراسر ایران",
            image: "/public/footer-pro/1.png"
        },
        {
            id: 3,
            text: "پشتیبانی 24 ساعته",
            icon: "phone-icon"
        },
        {
            id: 4,
            text: "7روز ضمانت بازگشت",
            icon: "box-icon"
        },
        {
            id: 5,
            text: "ضمانت اصالت کالا",
            image: "/public/footer-pro/guarantee.png"
        }
    ];

    const second_footer_section = [
        {
            id: 1,
            icon: "phone",
            text: "09125854944"
        },
        {
            id: 2,
            icon: "home-phone",
            text: "021-3266641"
        },
        {
            id: 3,
            icon: "location",
            text: "همدان,خیابان جمهوری,پاساژ سعیدیه,پلاک 290"
        },
        {
            id: 4,
            icon: "clock",
            text: "از شنبه تا پنجشنبه از ساعت 10:00 تا 21:00"
        },
    ];

    const third_footer_section = [
        {
            id: 1,
            first_text: "خدمات مشتریان"
        },
        {
            id: 2,
            text: "درباره ما"
        },
        {
            id: 3,
            text: "قوانین"
        },
        {
            id: 4,
            text: "سوالات متداول"
        },
    ];
    const fourth_footer_section = [
        {
            id: 1,
            first_text: "لینک های مفید"
        },
        {
            id: 2,
            text: "درباره ما"
        },
        {
            id: 3,
            text: "قوانین"
        },
        {
            id: 4,
            text: "سوالات متداول"
        },
    ];

    const img_last_section=[
        {id:1,img:"/public/footer-pro/zibal.png"},
        {id:2,img:"/public/footer-pro/neshan.png"},
        {id:3,img:""},
    ]

    return (
        <>
            <div className="w-full bg-[#282828]  flex flex-col text-white justify-center items-center">
                <div className="w-[78%]   flex justify-between items-center mt-3 mb-3 rtl">
                    {first_footer_section.map((item) => (
                        <div className="w-[19%]  flex flex-col justify-center items-center cursor-default rounded-[18px] transition-transform hover:scale-105" key={item.id}>
                            <Icon name={item.icon} />
                            <img src={item.image} alt="" />
                            <p className="mt-3">{item.text}</p>
                        </div>
                    ))}
                </div>
                <hr className="w-[80%] mb-7 mt-10" />
                <div className="w-full  flex justify-end mr-1">
                    <div className="flex w-[76%]  justify-between mr-11 items-start">
                        <div className="flex flex-col justify-center ">
                            {fourth_footer_section.map((item) => (
                                <div className="flex justify-end items-center m-1">
                                    <p className=" m-1 cursor-default font-bold text-[25px]">{item.first_text}</p>
                                    <p className=" m-1 cursor-default text-[20px] transition-transform hover:scale-105">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-center ">
                            {third_footer_section.map((item) => (
                                <div className="flex justify-end items-center m-1">
                                    <p className=" m-1 cursor-default font-bold text-[25px]">{item.first_text}</p>
                                    <p className=" m-1 cursor-default text-[20px] transition-transform hover:scale-105">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-center ">
                            {second_footer_section.map((item) => (
                                <div className="flex justify-end items-center m-1">
                                    <p className=" m-2 cursor-default text-[20px]">{item.text}</p>
                                    <Icon name={item.icon} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-24 h-28 flex justify-end items-center mr-2">
                        <Icon name="logo" />
                    </div>
                </div>
                <div className="w-full flex bg-lime-900">
                    <hr className="w-[80%] mb-7 mt-10" />
                    <p className="ml-11 text-[32px]">درباره<span className="text-[#F0C400]"> آکو اسپورت</span></p>

                </div>
            </div>
        </>
    )
}
export default Footer