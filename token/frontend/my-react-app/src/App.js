import "./App.css";

import "./Components/style.css";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import SignIn from "./Components/SignIn";
import "./Components/Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
