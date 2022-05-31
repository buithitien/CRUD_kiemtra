import axios from "axios";
import { useEffect, useState } from "react";
import { barURL } from "../constant/urls";

const Header = () => {
  const [data, setData] = useState([])
  const date = new Date();
  useEffect(() => {
    axios
      .get(`${barURL}`)
      .then((resp) => {
        let data = resp.data;
        setData(data)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });

}, [])
  return (
      <div>
    <div className="headerContainer">
      <img
        src={"https://vov.vn/themes/custom/vovvn/logo.svg"}
        alt=""
        style={{ height: "100px", width: "100px" }}
      />
      {date.toUTCString()}
      <div>
        <img
          src={"https://www.facebook.com/images/fb_icon_325x325.png"}
          alt=""
          style={{ height: "50px", width: "50px" }}
        />
        <img
          src={"https://www.facebook.com/images/fb_icon_325x325.png"}
          alt=""
          style={{ height: "50px", width: "50px" }}
        />
        <img
          src={"https://www.facebook.com/images/fb_icon_325x325.png"}
          alt=""
          style={{ height: "50px", width: "50px" }}
        />
        <img
          src={"https://www.facebook.com/images/fb_icon_325x325.png"}
          alt=""
          style={{ height: "50px", width: "50px" }}
        />
      </div>
      <button children="nghe va xem" />
      <p>English</p>
      <input />
    </div>
    <div className="barContainer">
        {data.map((el,index) => {
            return(
                <div className="barContent" key={index}>{el.title}</div>
            )
        })}
        <div>Sign In</div>
    </div>
    </div>
  );
};
export default Header;
