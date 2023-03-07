import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const OrdersManaging = () => {
  const [modal, setModal] = useState(false);
  const HandleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className="flex justify-between items-center text-pink-800  text-xl w-[70%] -mt-10 m-auto ">
        <p>مدیریت سفارش ها</p>
        <div className="flex w-96 gap-12">
          <div className="flex gap-1 ">
            <p className=" text-sm">سفارش های تحویل شده</p>
            <input type="radio" />
          </div>
          <div className="flex gap-1">
            <p className=" text-sm">سفارش های تحویل شده</p>
            <input type="radio" />
          </div>
        </div>
      </div>
      {/* modal  */}
      <div
        className={
          modal
            ? "bg-modal absolute w-[100%] top-0 right-0 h-[100vh] bg-pink-200 bg-opacity-80 grid place-items-center z-50 "
            : "hidden"
        }
      >
        <div className="modal w-[30vw] p-4 bg-gray-100 shadow-2xl rounded-lg space-y-9 ">
          <div className="modal-header space-y-4 ">
            <div className="flex justify-between ">
              <p className="text-[1.5rem] font-bold text-pink-800 ">
                نمایش سفارش
              </p>
              <div className="icon grid place-items-center cursor-pointer">
                <AiOutlineClose onClick={HandleModal} />
              </div>
            </div>
            <hr />
            <div>
              <div className="modal-body ">
                <div className="flex gap-7  p-2">
                  <p>نام مشتری:</p>
                  <p>سارا </p>
                </div>
                <div className="flex gap-7  p-2">
                  <p> آدرس:</p>
                  <p>کرج </p>
                </div>
                <div className="flex gap-7 p-2">
                  <p> تلفن:</p>
                  <p>0910087373 </p>
                </div>
                <div className="flex gap-7  p-2">
                  <p> زمان تحویل:</p>
                  <p>2/4/1401 </p>
                </div>
                <div className="flex gap-7 p-2 mb-5">
                  <p> زمان سفارش:</p>
                  <p> 9/4/1401</p>
                </div>

                <div className="w-[84%] relative overflow-x-auto shadow-xl sm:rounded-lg dir-rtl m-auto ">
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

                <div className="flex gap-7 p-3 mr-24 mt-5">
                  <p> زمان تحویل:</p>
                  <p> 9/4/1401</p>
                </div>

              </div>
              <div className="modal-footer space-y-5 mt-5">
                <hr />
                <div className="flex justify-between">
                  <button
                    type=""
                    // onSubmit={}
                    className="bg-green-700 w-[8rem] p-2 rounded-md text-[1.2rem] text-white  focus:border-pink-500"
                  >
                    ذخیره
                  </button>
                  <button
                    onClick={HandleModal}
                    type="submit"
                    className="bg-red-800 w-[8rem] p-2 rounded-md text-[1.2rem] text-white  focus:border-pink-500"
                  >
                    بستن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[70%] relative overflow-x-auto shadow-xl sm:rounded-lg dir-rtl m-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px- py-3 pl-6">
                نام کاربر
              </th>
              <th scope="col" className="px-6 py-3">
                مجموع مبلغ
              </th>
              <th scope="col" className="px-6 py-3">
                زمان ثبت سفارش
              </th>
              <th scope="col" className="px-3 py-3 text-center pl-3">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4 text-center pl-3">
                <div className="modal-container relative">
                  <p
                    onClick={HandleModal}
                    className="font-medium text-pink-600 dark:text-pink-500 hover:underline ml-3"
                  >
                    بررسی سفارش
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersManaging;