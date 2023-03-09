import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import '../../../admin/style.css'
const StockPriceManagment = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/products").then((res) => {
      setProductData(res.data);
    });
  }, []);

  //-----------------------------------------------------------
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 3;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = productData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productData.length / 3);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % productData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div >
      <div  >
        <div className="flex justify-between items-center text-pink-800  
        text-xl w-[70%]  m-auto ">
          <p>مدیریت موجودی و قیمت ها</p>
          <Link to="/finalbasket">
            <button
              className="py-2.5 px-14 text-center mr-32 mt-7 text-sm 

                  font-medium  focus:outline-none
                   bg-pink-400  rounded-full border border-none
                    hover:bg-pink-300 hover:text-pink-700 
                    focus:z-10 focus:ring-4 focus:ring-pink-200
                     dark:focus:ring-pink-700 dark:bg-pink-800
                      dark:text-pink-400
                   dark:border-pink-600 dark:hover:text-white
                    dark:hover:bg-pink-700
                    text-white"
            >
            
              ذخیره
            </button>
          </Link>
        </div>
        <div className="w-[70%] relative overflow-x-auto shadow-xl sm:rounded-lg dir-rtl m-auto  mt-7">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px- py-3 pl-6">
                  کالا
                </th>
                <th scope="col" className="px-6 py-3">
                  قیمت
                </th>
                <th scope="col" className="px-6 py-3">
                  موجودی
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => {
                return (
                  <>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <td className="py-4 ">{item.name}</td>
                      <td className="px-14 py-4 ">{item.price}</td>
                      <td className="py-4 px-16 pl-[5rem]">{item.quantity} تومان</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center text-white  ">
        <ReactPaginate
          className="pagination flex gap-4 flex-row-reverse  bg-pink-600 p-5 rounded-2xl "
          breakLabel="..."
          nextLabel="بعد > "
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< قبل"
          renderOnZeroPageCount={null}
          activeClassName='activePagination' 
        />
      </div>
    </div>
  );
};

export default StockPriceManagment;
