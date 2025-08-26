export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-[45px] font-bold mb-10 text-gray-800 rtl">
        با اینا سفرت به راهه!
      </h1>

      <div className="flex gap-6 mb-8">
        <div className="bg-white w-[315px] h-[293px] rounded-2xl shadow-2xl flex items-center justify-center transition-transform hover:scale-105 bg-gradient-to-br from-[#454545] to-[#4A72C9]">
          <img src="Populer-product/blue-coat.png"  className="w-full h-full object-contain p-4" />
        </div>
        <div className="bg-white w-315px] h-[293px] rounded-2xl shadow-2xl flex items-center justify-center transition-transform hover:scale-105  bg-gradient-to-br from-[#454545] to-[#748239]">
          <img src="Populer-product/ketri.png"  className="w-full h-full object-contain p-4" />
        </div>
        <div className="bg-white w-[315px] h-[435px] rounded-2xl shadow-2xl flex items-center justify-center transition-transform hover:scale-105 bg-gradient-to-br from-[#454545] to-[#A22936]">
          <img src="Populer-product/shose.png"  className="w-full h-full object-contain p-4" />
        </div>
        <div className="bg-white w-[315px] h-[435px] rounded-2xl shadow-2xl flex items-center justify-center transition-transform hover:scale-105 bg-gradient-to-br from-[#454545] to-[#062D30]">
          <img src="Populer-product/chador.png"  className="w-full h-full object-contain p-4" />
        </div>
      </div>


      <div className="flex gap-6 mb-14">
        <div className="-ml-[4px] flex gap-6">
          <div className="bg-white w-[315px] h-[435px] rounded-2xl shadow-2xl -mt-[144px] flex items-center justify-center transition-transform hover:scale-105 bg-gradient-to-br from-[#454545] to-[#C78F00]">
            <img src="Populer-product/barani.png"  className="w-full h-full object-contain p-4" />
          </div>
          <div className="bg-white w-[300px] h-[435px] rounded-2xl shadow-2xl -mt-[144px] flex items-center justify-center transition-transform hover:scale-105 bg-gradient-to-br from-[#454545] to-[#7E2C6E]">
            <img src="Populer-product/chair.png"  className="w-full h-full object-contain p-4" />
          </div>
        </div>
        <div className="bg-white w-[315px] h-[293px] rounded-2xl shadow-2xl flex items-center justify-center transition-transform hover:scale-105 bg-gradient-to-br from-[#454545] to-[#454545]">
          <img src="Populer-product/gas.png" className="w-full h-full object-contain p-4" />
        </div>
        <div className="bg-white w-[315px] h-[293px] rounded-2xl shadow-2xl flex items-center justify-center transition-transform hover:scale-105 bg-gradient-to-br from-[#454545] to-[#FD701B]">
          <img src="Populer-product/chago.png" className="w-full h-full object-contain p-4" />
        </div>
      </div>
    </div>
  );
}