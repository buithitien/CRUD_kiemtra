import './New.css'
function News(props) {
  return (
    <div class="Card_new">
      <div class="img">
        <img src={props.image} className = "new_img"></img>
      </div>
      <div class="title">
        <h3 className='title_new'>{props.title}</h3>
      </div>
    </div>
  );
}
export default News;
