import "./App.css";
import Dprofile from "./pages/Dprofile/Dprofile";
import Home from "./pages/Home/Home";
import Auth from "./pages/auth/Auth";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-10%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Home />
      {/* <Dprofile/> */}
      {/* <Auth/> */}
    </div>
  );
}

export default App;
