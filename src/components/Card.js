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
        url: "http://localhost:4000/api/v1/products",
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

                  <div className='card__size'>
                    <h3>Units :</h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
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
