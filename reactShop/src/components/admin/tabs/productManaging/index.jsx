import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ProductManaging = () => {
  
  const tableData=[
    {name:"بهاره",image:"",cat:'scarf',id:1},
    {name:"بهاره",image:"",cat:'scarf',id:2},
    {name:"بهاره",image:"",cat:'scarf',id:3},
    {name:"بهاره",image:"",cat:'scarf',id:4},
    {name:"بهاره",image:"",cat:'scarf',id:5},

  ]


  // remove item
  const handleRemove = (id) => {
    const filter=tableData.filter((item)=>item.id !==id);
    
  };

  const [modal, setModal] = useState(false);
  const HandleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className="flex justify-between items-center text-pink-800  text-xl w-[70%] -mt-10 m-auto ">
        <p>مدیریت کالاها</p>

        <div className="modal-container relative">
          <button
            onClick={HandleModal}
            className="py-2.5 px-14 text-center mr-32 mb-11 text-sm 

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
            افزودن کالا
          </button>
        </div>
        {/* modal */}
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
                  افزودن/ویرایش کالا
                </p>
                <div className="icon grid place-items-center cursor-pointer">
                  <AiOutlineClose onClick={HandleModal} />
                </div>
              </div>
              <hr />
              <div>
                <div className="modal-body ">
                  <div>
                    <lable
                      htmlFor="img"
                      className="block mb-2  text-sm font-medium text-pink-900 dark:text-white"
                    >
                      تصویر کالا:
                    </lable>
                    <div className="">
                      <input
                        type="file"
                        id="img"
                        className="block p-2 w-full mb-5 text-xs text-pink-900 border border-pink-300
                       rounded-lg cursor-pointer bg-white dark:text-pink-400
                       focus:outline-pink-500 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-black"
                      />
                    </div>
                    <lable
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-pink-900 dark:text-white"
                    >
                      نام کالا:
                    </lable>
                    <div>
                      <input
                        type="text"
                        placeholder="نام کالا را وارد کنید"
                        id="name"
                        className="block w-full p-1 text-pink-900 border
                       border-pink-300 rounded-lg bg-white sm:text-sm
                       focus:ring-pink-500 focus:border-pink-500 dark:bg-pink-700 dark:border-pink-600
                       dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                      />
                    </div>
                    <lable
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-pimk-900 dark:text-white"
                    >
                      دسته بندی:
                    </lable>
                    <div>
                      <select
                        id="category"
                        className="bg-pimk-50 border border-pimk-300 text-pimk-900 
                      text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block 
                      w-full p-2.5 dark:bg-pimk-700 dark:border-pimk-600
                       dark:placeholder-black dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                      >
                        <option value="بهاره">بهاره</option>
                        <option value="تابستانه">تابستانه</option>
                        <option value="پاییزه">پاییزه</option>
                        <option value="زمستانه">زمستانه</option>
                      </select>
                    </div>
                    <lable
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-pimk-900 dark:text-white"
                    >
                      توضیحات:
                    </lable>
                    <div>
                      <textarea
                        rows="4"
                        id="text"
                        className="block p-2.5 w-full text-sm text-pimk-900 bg-pimk-50 outline-none
                        rounded-lg border border-pimk-300 focus:ring-pink-500
                         focus:border-pink-500 dark:bg-pimk-700 dark:border-pimk-600
                          dark:placeholder-black dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        placeholder="......توضیحات"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer space-y-5 ">
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
      </div>
      <div className="w-[70%] relative overflow-x-auto shadow-xl sm:rounded-lg dir-rtl m-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px- py-3 pl-6">
                تصویر
              </th>
              <th scope="col" className="px-6 py-3">
                نام کالا
              </th>
              <th scope="col" className="px-6 py-3">
                دسته بندی
              </th>
              <th scope="col" className="px-3 py-3 text-center pl-3">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => () => {
              return (
                
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-6 py-4 ">{item.name}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">${item.image}</td>
                  <td className="px-6 py-4 text-center pl-3">
                    <h2
                      onClick={() => handleRemove()}
                      className="font-medium text-pink-600 dark:text-pink-500 hover:underline ml-3"
                    >
                      حذف
                    </h2>
                    <h2
                      href="#"
                      className="font-medium text-pink-600 dark:text-pink-500 hover:underline"
                    >
                      ویرایش
                    </h2>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManaging;
