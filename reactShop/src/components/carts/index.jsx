import React, { useEffect } from "react";
import Cart from "../cart";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../redux/feature/cart-slice";

const Carts = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <section className="py-10 bg-gray-100">
        <h1 className="mr-56 text-pink-800">شال بهاره</h1>
        <div className=" mx-auto grid  max-w-6xl  grid-cols-1 gap-12 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {products.map(
            (item) =>
              item.category === 3 &&
              item.showOnHomePage && (
                <Cart key={item.id} id={item.id} item={item} />
              )
          )}
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <h1 className="mr-56 text-pink-800">شال تابستانی</h1>
        <div className=" mx-auto grid  max-w-6xl  grid-cols-1 gap-12 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {products.map(
            (item) =>
              item.category === 2 && 
              item.showOnHomePage &&
              (
                <Cart key={item.id} id={item.id} item={item} />
              )
          )}
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <h1 className="mr-56 text-pink-800">شال پاییزه</h1>
        <div className=" mx-auto grid  max-w-6xl  grid-cols-1 gap-12 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {products.map(
            (item) =>
              item.category === 4 &&
              item.showOnHomePage && (
                <Cart key={item.id} id={item.id} item={item} />
              )
          )}
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <h1 className="mr-56 text-pink-800">شال زمستانه</h1>
        <div className=" mx-auto grid  max-w-6xl  grid-cols-1 gap-12 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {products.map(
            (item) =>
              item.category === 1 &&
              item.showOnHomePage && (
                <Cart key={item.id} id={item.id} item={item} />
              )
          )}
        </div>
      </section>
    </>
  );
};

export default Carts;
