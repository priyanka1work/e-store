import logo from "./logo.svg";
import "./App.css";
import TopNav from "./component/TopNav/TopNav";
import CatNav from "./component/CatNav/CatNav";
import Maincomponent from "./component/MainComponent/Maincomponent";

function App() {
  return (
    <div className="App">
     <TopNav/>
     <CatNav/>
     <Maincomponent/>
     
    </div>
  );
}

export default App;
