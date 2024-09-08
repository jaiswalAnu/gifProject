// // import React from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

// const useGif = () => {
//   const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState("false");

//   async function fetchData(tag) {
//     setLoading(true);

//     const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData("car");
//   }, []);

//   return { gif, loading, fetchData };
// };

// export default useGif;
// import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false); // Corrected the initial value of loading state

  async function fetchData(tag) {
    setLoading(true);

    try {
      const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching the GIF: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData("car");
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
