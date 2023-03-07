import React from "react";
import { Link } from "react-router-dom";

const StockPriceManagment = () => {
  return (
<div>
<div className="flex justify-between items-center text-pink-800  text-xl w-[70%] -mt-10 m-auto ">
    <p>مدیریت  موجودی و قیمت ها</p>
    <Link to='/finalbasket'><button className="py-2.5 px-14 text-center mr-32 mb-11 text-sm 

                  font-medium  focus:outline-none
                   bg-pink-400  rounded-full border border-none
                    hover:bg-pink-300 hover:text-pink-700 
                    focus:z-10 focus:ring-4 focus:ring-pink-200
                     dark:focus:ring-pink-700 dark:bg-pink-800
                      dark:text-pink-400
                   dark:border-pink-600 dark:hover:text-white
                    dark:hover:bg-pink-700
                    text-white">  ذخیره  </button></Link>
  </div>
    <div className="w-[70%] relative overflow-x-auto shadow-xl sm:rounded-lg dir-rtl m-auto">
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
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td className="px-6 py-4 ">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
  );
};

export default StockPriceManagment;
