/** @format */

import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
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
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    initFetch();
  }, []);

  return <div className='App'>Angry Bird Eccomerce</div>;
}

export default App;
