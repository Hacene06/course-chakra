import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";


const App = () => {
  const [token, setToken] = useState();
  console.log(token);

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <Navbar setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  );
};

export default App;
