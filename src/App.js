import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavIndex from "./foodproject/home/Navindex";
import SignUpIndex from "./foodproject/home/Signup";
import LoginIndex from "./foodproject/home/login";
import Dashboard from "./foodproject/dashboard/Dashboard";
import Menupage from "./foodproject/dashboard/Menucard";
import OCpage from "./foodproject/dashboard/OCpage";
import MyProvider from "../src/context/provider";

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<SignUpIndex />} />
            <Route path="/home" element={<NavIndex />} />
            <Route path="/Signup" element={<SignUpIndex />} />
            <Route path="/Login" element={<LoginIndex />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/menu" element={<Menupage />} />
            <Route path="/orderplace" element={<OCpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyProvider>
    // <NavIndex />
  );
}

export default App;
