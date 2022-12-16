/** @format */

import React, { useEffect, useState } from "react";
import CartDetails from "../CartDetails/CartDetails";
import "./CartProducts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartProducts = () => {
  const [array, setArray] = useState([]);
  const [updatedArray, setUpdatedArray] = useState([]);

  const [WishlistArray, setWishlistArray] = useState(
    JSON.parse(localStorage.getItem("wishlistObj") || "[]")
  );

  const notify = () => toast.dark("Removed from cart");

  const notify1 = () => toast.dark("Moved to Wishlist");

  useEffect(() => {
    const str = JSON.parse(localStorage.getItem("cartObj"));

    const updatedItems = str.filter((item) => item.id !== array.id);
    setUpdatedArray(updatedItems);
    localStorage.setItem("cartObj", JSON.stringify(updatedItems));
    console.log(JSON.parse(localStorage.getItem("cartObj")));

    const wishlistObj = JSON.stringify(WishlistArray);

    localStorage.setItem("wishlistObj", wishlistObj);
  }, [setArray, array, WishlistArray]);

  return (
    <>
      <CartDetails data={updatedArray} />
      <ToastContainer />
      <div className='cart-products'>
        {updatedArray.map((item) => {
          return (
            <div key={item.id} className='cart-products-card'>
              <img src={item.img} alt='item-img' className='item-cart-img' />
              <h1>{item.name}</h1>
              <p>Price :- Rs {item.discountedPrice}</p>
              <div>
                <button
                  className='btn-card'
                  onClick={() => {
                    setTimeout(() => {
                      setWishlistArray([
                        ...WishlistArray,
                        {
                          id: item.id,
                          name: item.name,
                          img: item.img,
                          discountedPrice: item.discountedPrice,
                        },
                      ]);
                    }, 100);
                    setArray(item);
                    notify1();
                  }}>
                  Move to Wishlist
                </button>
                <button
                  className='btn-card'
                  onClick={() => {
                    setArray(item);
                    notify();
                  }}>
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartProducts;
