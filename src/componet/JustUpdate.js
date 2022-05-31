import { useEffect } from "react";
import { useState } from "react";
import { jusUpdateUrl } from "../constant/urls";

const JustUpdate = () => {
  const axios = require("axios");
  const [data, setData] = useState([])
  useEffect(() => {
      axios
        .get(`${jusUpdateUrl}`)
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
    <p className="justUpdate">Just Update</p>
      {data?.map((el, index) => {
          return(
              <div key={index} className="justUpdateView">
                  <img src={el?.image} alt="" className="justUpdateImage"/>
                  <p>{el?.title}</p>
              </div>
          )
      })}
  </div>;
};
export default JustUpdate;
