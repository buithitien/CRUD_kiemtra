import "./App.css";
import ActionForm from "./componet/ActionForm";
import Header from "./componet/Header";
import JustUpdate from "./componet/JustUpdate";
import MainNews from "./componet/MainNews";
import SubNews from "./componet/SubNews";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="conatinerView">
        <div className="mainContainer">
          <MainNews />
        </div>
        <div className="subContainer">
          <SubNews />
        </div>
        <div className="justUpdateContainer">
          <JustUpdate />
        </div>
      </div>
      <div style={{width: "100%"}}>
        <ActionForm />
      </div>
    </div>
  );
}

export default App;
