import "./Form.css";

function Form (props) {
        return (
          <form onSubmit={(e) => {props.handlerSubmit(e)}}>
            <label>Status</label>
            <input
              type="text"
              value={props.status}
              name="status"
              onChange={(e) => {
                props.handerlechange(e);
              }}
            ></input>
            <br></br>
            <label>Image_post</label>
            <input
              type="text"
              value={props.image}
              name="image_post"
              onChange={(e) => {
                props.handerlechange(e);
              }}
            ></input>
            <br></br>
            <label>Title</label>
            <input
              type="text"
              value={props.title}
              name="title"
              onChange={(e) => {
                props.handerlechange(e);
              }}
            ></input>
            <br></br>
            <button
              type="submit"
            >
              {props.stateButton}
            </button>
          </form>
        );
}
export default Form;