import './Main.css'
function Main (props){
    return (
        <div className = "Card">
            <div className = "img">
                 <img src= {props.img} className = 'main_img'></img>
            </div>  
            <div className= 'title'>
                <h3>{props.title}</h3>  
            </div>
        </div>  
        
    )
}
export default Main;