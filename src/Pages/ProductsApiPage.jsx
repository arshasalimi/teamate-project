import { useEffect, useState } from "react";
import Api from "../Services/api";
import ReactPaginate from "react-paginate";



function ProductsApiPage() {
    const [Products, setProducts] = useState([])
    const [end, setEnd] = useState(0)
    const perPage = 20
    const endOffset = end + perPage;
    const currentItems = Products.slice(end, endOffset);
    const pageCount = Math.ceil(Products.length / perPage);
    useEffect(() => {
        Api.get("/products?limit=200")
            .then(res => setProducts(res.data.products))
    }, [])
    console.log(Products);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * perPage) % Products.length
        setEnd(newOffset);
    }
    return (
        <>
            <div className="flex w-full h-[220vh] justify-center items-center flex-col">
                <div className="flex flex-wrap w-[77%] h-[96%] justify-between items-center gap-2">
                    {currentItems.map((item) => (
                        <div className="flex flex-col justify-center items-center w-[18.6%] h-[22%] cursor-pointer rounded-[13px] shadow-shadowcustom1 transition-transform hover:scale-105">
                            <div className="w-[100%] h-[60%] rounded-[13px]">
                                <img src={item.images} alt="" className="rounded-[13px] w-full h-full" />
                            </div>
                            <div className="w-full h-[40%] rounded-[13px]">
                                <div className="w-full h-[40%]">
                                    <p className="text-[18px] ml-3">{item.title}</p>
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-[26px] text-[#FFB800]">{item.price} دلار</p>
                                    <p className="text-[21px] text-[#000000B2] line-through">{item.discountPercentage} دلار</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex mt-9 mb-6">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={null}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel={null}
                        renderOnZeroPageCount={null}
                        activeClassName="bg-[#FFB800] w-[60px] h-[60px] border-none flex justify-center items-center text-[30px]"
                        className="flex justify-center"
                        pageClassName="border-[1px] border-[black] w-[60px] flex justify-center rounded-[26px] m-1 items-center text-[30px] shadow-shadowcustom1 transition-transform hover:scale-105"
                        breakClassName="border-[1px] border-[black] w-[60px] flex justify-center rounded-[26px] m-1 items-center text-[30px] shadow-shadowcustom1 transition-transform hover:scale-105"
                    />
                </div>
            </div>
        </>
    )
}
export default ProductsApiPage