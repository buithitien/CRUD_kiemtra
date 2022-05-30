import Form from "./Form/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowPost from "./showPosts.js/ShowPost";
function Admin() {
  const [post, setPost] = useState({
    id: "",
    status: "",
    image_post: "",
    title: "",
  });
  const [listProduct, setListProduct] = useState([]);
  const [stateButton, setStateButton] = useState("Add");
  const getData = () => {
    axios
      .get(`https://61bc48c0d8542f0017824661.mockapi.io/api1/CRUD`)
      .then((res) => {
        setListProduct(res.data);
      })
      .catch((error) => console.log(error));
  };
    useEffect(() => {
      getData();
    }, []);
  const handlerChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setPost((prev) => {
      const prevState = { ...prev };
      prevState[nam] = val;
      return prevState;
    });
  };
  const addPost = (e) => {
    e.preventDefault();
    stateButton === "Add"
      ? axios
          .post(`https://61bc48c0d8542f0017824661.mockapi.io/api1/CRUD`, {
            status: post.status,
            image_post: post.image_post,
            title_post: post.title,
          })
          .then((res) => {
            alert("post thanh cong");
            setPost((prev) => {
              const prevState = { ...prev };
              prevState.status = "";
              prevState.image_post = "";
              prevState.title = "";
              console.log(prevState);
              return prevState;
            });
            getData();
          })
      : axios
          .put(
            `https://61bc48c0d8542f0017824661.mockapi.io/api1/CRUD${post.id}`,
            {
              id: post.id,
              status: post.status,
              image_post: post.image_post,
              title_post: post.title,
            }
          )
          .then((res) => {
            alert("Update thanh cong");
            setPost((prev) => {
              const prevState = { ...prev };
              prevState.status = "";
              prevState.image_post = "";
              prevState.title = "";
              console.log(prevState);
              return prevState;
            });
            setStateButton("Add");
            getData();
          });
  };
  const showInput = (product) => {
    setPost((prev) => {
      const prevState = { ...prev };
      prevState.status = product.status;
      prevState.image_post = product.image_post;
      prevState.title = product.title_post;
      prevState.id = product.id;
      return prevState;
    });
    setStateButton("Update");
  };
  const deleteProduct = (product) => {
          setPost((prev) => {
            const prevState = { ...prev };
            prevState.id = product.id;
            return prevState;
          });
          axios
            .delete(
              `https://61bc48c0d8542f0017824661.mockapi.io/api1/CRUD${product.id}`
            )
            .then((res) => {
              getData();
            });
  } 
  return (
    <>
      <Form
        status={post.status}
        image={post.image_post}
        title={post.title}
        handerlechange={(e) => {
          handlerChange(e);
        }}
        handlerSubmit={(e) => {
          addPost(e);
        }}
        stateButton={stateButton}
      />
      <ShowPost
        ListProduct={listProduct}
        updateInput={(product) => {
          showInput(product);
        }}
        deleteProduct ={(product) =>{
          deleteProduct(product)
        }}
      />
    </>
  );
}
export default Admin;
