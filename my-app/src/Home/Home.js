import { useEffect, useState } from "react";
import axios from "axios";
import Main from "../Components/Main/Main";
import News from "../Components/News/News";
import Outstanding from "../Components/Outstanding/Outstanding";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import './Home.css';
function Homepage() {
    const [listProduct,setListProduct] = useState([]);
    const getData = () => {
      axios
        .get(`https://61bc10bcd8542f001782451a.mockapi.io/Itemofcart`)
        .then((res) => {
          setListProduct(res.data);
        })
        .catch((error) => console.log(error));
    };
    useEffect(() => {
        getData()
        console.log(listProduct);
    },[])
  return (
    <>
      <div className="row">
        {listProduct
          .filter((products) => products.status === "main")
          .map((product, index) => (
            <Main
              key={index}
              img={product.image_post}
              title={product.title_post}
            />
          ))}

        <div>
          {listProduct
            .filter((products) => products.status === "outstanding")
            .map((product, index) => (
              <Outstanding
                key={index}
                image={product.image_post}
                title={product.title_post}
              />
            ))}
        </div>
        <div>
          {listProduct
            .filter((products) => products.status === "new")
            .map((product, index) => (
              <News
                key={index}
                image={product.image_post}
                title={product.title_post}
              />
            ))}
        </div>
      </div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/admin"> Go to admin</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Homepage;
