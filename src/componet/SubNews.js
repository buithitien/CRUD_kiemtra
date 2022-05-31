import { useEffect } from "react";
import { useState } from "react";
import { subnNewsUrl } from "../constant/urls";

const SubNews = () => {
  const axios = require("axios");
  const [data, setData] = useState()
  useEffect(() => {
      axios
        .get(`${subnNewsUrl}`)
        .then((resp) => {
          let data = resp.data;
          setData(data)
          console.log(data)
        })
        .catch((error) => {
          console.log(error);
        });
  }, [])
  return <div>
      {data?.map((el, index) => {
          return(
              <div key={index}>
                  <img src={el?.image} alt="" className="mainImage"/>
                  <p>{el?.title}</p>
              </div>
          )
      })}
  </div>;
};
export default SubNews;
