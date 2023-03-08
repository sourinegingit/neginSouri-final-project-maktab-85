import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: ""
    },
    validationSchema: Yup.object({
      userName: Yup.string()
      .required("نام کاربری الزامی است.").max(15, 'کاراکتر کمتر از 15').min(3, 'کاراکتر بیشتر از 3'),
      password: Yup.string().required("رمز عبور الزامی است.") .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "رمز عبور باید شمامل 8 کاراکتر و یک حروف بزرگ و یک حروف کوچک و یک عدد و یک سمبل باشد."
      ),
    }),
    onSubmit: (values) => {
      const user={
        username:values.userName,
        password:values.password

      }
      console.log(values);
      localStorage.setItem("userdata", JSON.stringify(values));
      navigate("/panelAdmin");
    }
  });
  return (
    <div
    className="  flex items-center justify-center h-screen   bg-gradient-to-r from-pink-300 to-pink-400"
  >
    <div className=" flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0 justify-center items-center ">
      <div className="">
        <div className=" flex justify-center items-center p-6 space-y-4 md:space-y-6">
          <form
            onSubmit={formik.handleSubmit}
            className=" bg-pink-100 w-[28rem] rounded-lg shadow-2xl dark:border border-pink-400 border-2 md:mt-0 space-y-4  md:space-y-6  p-4 "
          >
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-pink-900 dark:text-white"
            >
              نام کربری
            </label>
            <input
              className="bg-pink-50 border border-pink-300 text-pink-900 sm:text-sm rounded-lg focus:border-pink-600 focus:outline-none  block w-full p-2.5 
          dark:"
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div>{formik.errors.userName}</div>
            ) : null}

            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-pink-900 dark:text-white"
            >
              رمز عبور
            </label>
            <input
              className="bg-pink-50 border border-pink-300
             focus:border-pink-600 focus:outline-none
              text-gray-900 sm:text-sm rounded-lg mb-5
              focus:border-primary-600 block w-full p-2.5 
             dark:"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <button
              type="submit"
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
              ورود
            </button>
          <Link to='/'>
          <div className="container-login100-form-btn p-2 pt-12">
              <button
                to="/"
                className="flex flex-row-reverse
               items-end text-pink-900 hover:text-red-500"
              >
                بازگشت به سایت
              </button>
            </div>
          </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Auth;
