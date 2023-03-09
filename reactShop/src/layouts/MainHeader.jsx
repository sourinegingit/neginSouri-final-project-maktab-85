import { useState, React } from "react";
import shop from '../assets/shop2.webp'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from '../components/Search'
const MainHeader = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full h-24 p-5 shadow bg-gray-300">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center justify-between gap-4">
            <img
                src={shop}
                alt="shop logo"
                className="shadow  w-12 rounded-full h-auto align-middle border-none -mt-2"
              />

              <a href="javascript:void(0)">
                <h4 className="text-xl font-bold text-pink-800"> فروشگاه لباس و پوشاک </h4>
              </a>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Search />
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-1 mt-1 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 gap-12">
              <li className="text-pink-800 hover:text-pink-600">
                <Link to="/auth">مدیریت</Link>
              </li>
              <li className="text-pink-800 hover:text-pink-600 flex items-center justify-center gap-2">
                <FaShoppingCart />
                <Link to='/basket'>سبد خرید</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainHeader;
