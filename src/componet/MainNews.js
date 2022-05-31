import { useEffect } from "react";
import { useState } from "react";
import { mainNewsUrl, mainNewsUrlContent } from "../constant/urls";

const MainNews = () => {
  const axios = require("axios");
  const [data, setData] = useState()
  const [dataContent, setDataContent] = useState()
  useEffect(() => {
      axios
        .get(`${mainNewsUrl}`)
        .then((resp) => {
          let data = resp.data;
          setData(data)
        })
        .catch((error) => {
          console.log(error);
        });
  }, [])
  useEffect(() => {
    axios
      .get(`${mainNewsUrlContent}`)
      .then((resp) => {
        let data = resp.data;
        setDataContent(data)
      })
      .catch((error) => {
        console.log(error);
      });
}, [])
  return <div>
      <img src={data?.image} alt="" className="mainImage"/>
      <p className="mainTitle">
      {data?.title}
      </p>
      {dataContent?.map((el,index) => {
          return(
              <p className="mainContent" key={index}>{el.title}</p>
          )
      })}
  </div>;
};
export default MainNews;
