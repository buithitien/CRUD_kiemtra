import './Outstading.css'
function Outstanding(props) {
  return (
    <div class="Card">
      <div class="img">
        <img src={props.image} className = 'outstanding_img'></img>
      </div>
      <div class="title">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}
export default Outstanding;
