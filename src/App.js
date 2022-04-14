import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./component/HeaderNav/HeaderNav";
import Home from "./component/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./component/Login/Login";
import Registation from "./component/Registation/Registation";
import Other from "./component/Other/Other";
import HotelDetails from "./component/HotelDetails/HotelDetails";
import RequireAuth from "./component/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registation" element={<Registation />} />
        <Route path="/other" element={<Other />} />
        
        <Route path="/:id" element={
          <RequireAuth>
            <HotelDetails />
          </RequireAuth>
      
        } />
      </Routes>
    </div>
  );
}

export default App;
