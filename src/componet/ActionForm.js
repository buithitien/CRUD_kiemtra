import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import {
  jusUpdateUrl,
  mainNewsUrl,
  mainNewsUrlContent,
  subnNewsUrl,
} from "../constant/urls";
const MAINACTION = "MAINACTION";
const SUBACTION = "SUBACTION";
const JUSTACTION = "JUSTACTION";

const ActionForm = () => {
  const onSubmit = (values) => {
    const { action, type, ...remainValue } = values;
    if (action === MAINACTION) {
      if (type === "ADD") {
        axios
          .post(`${mainNewsUrlContent}`, remainValue)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (type === "DELETE") {
        axios
          .delete(`${`${mainNewsUrlContent}`}/${values.id}`)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .put(`${`${mainNewsUrlContent}`}/${values.id}`, remainValue)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else if (action === SUBACTION) {
      if (type === "ADD") {
        axios
          .post(subnNewsUrl, remainValue)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (type === "DELETE") {
        axios
          .delete(`${subnNewsUrl}/${values.id}`)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .put(`${subnNewsUrl}/${values.id}`, remainValue)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else if (action === JUSTACTION) {
      if (type === "ADD") {
        axios
          .post(jusUpdateUrl, remainValue)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (type === "DELETE") {
        axios
          .delete(`${jusUpdateUrl}/${values.id}`)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .put(`${jusUpdateUrl}/${values.id}`, remainValue)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Formik
        initialValues={{
          action: MAINACTION,
          type: "DELETE",
          title: "",
          image: "",
          id: 0,
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, handleSubmit, handleChange, setFieldValue }) => {
          return (
            <form
              onSubmit={handleSubmit}
              style={{ justifyContent: "center", width: "100%" }}
            >
              <div>
                <select
                  type="text"
                  name="name"
                  onChange={(e) => setFieldValue("action", e.target.value)}
                >
                  <option value={MAINACTION}>Main change</option>
                  <option value={SUBACTION}>Sub change</option>
                  <option value={JUSTACTION}>Just change</option>
                </select>
                <select
                  type="text"
                  name="targer"
                  onChange={(e) => setFieldValue("type", e.target.value)}
                  defaultValue={values.type}
                >
                  <option value={"DELETE"}>DELETE</option>
                  <option value={"ADD"}>ADD</option>
                  <option value={"CHANGE"}>CHANGE</option>
                </select>
              </div>
              <div>
                {values.type !== "ADD" ? (
                    <input
                      value={values.id}
                      onChange={(e) => setFieldValue("id", e.target.value)}
                      placeholder="id"
                      style={{ padding: "10px", width: "40%" }}
                    />
                ) : (
                  <input
                    value={values.image}
                    onChange={(e) => setFieldValue("image", e.target.value)}
                    placeholder="img url"
                    style={{ padding: "10px", width: "40%" }}
                  />
                )}
                <input
                  value={values.title}
                  onChange={(e) => setFieldValue("title", e.target.value)}
                  placeholder="title"
                  style={{ padding: "10px", width: "40%" }}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default ActionForm;
