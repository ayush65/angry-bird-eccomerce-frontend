/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const initFetch = async () => {
      const options = {
        method: "GET",
        url: "https://angry-bird-eccomerce-backend.vercel.app/api/v1/products",
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setArray(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    initFetch();
  }, []);

  return (
    <div className='card-flex'>
      {array.map((item, i) => {
        return (
          <div>
            <div>
              <div className='card'>
                <div className='card__imageContainer'>
                  <img src={item.imgUrl} alt='' className='card__image' />
                </div>
                <div className='card__contentContainer'>
                  <h2>{item.name}</h2>

                  <div className='card__price'>
                    <div>Price : Rs {item.discountedPrice}</div>
                    <div className='card-price-container'>
                      <div className='card-ActualPrice'>{item.ActualPrice}</div>
                      <div className='line-cut'></div>
                    </div>
                  </div>

                  <button className='btn-card'>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
