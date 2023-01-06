import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";


const App = () => {
  const [token, setToken] = useState();
  console.log(token);

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
   <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' area={'header'}>
   <Header/>
  </GridItem>
  <GridItem pl='2' area={'nav'}>
  <Navbar/>
  </GridItem>
  <GridItem pl='2' area={'main'}>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  </GridItem>
</Grid >

   
    

   );
};

export default App;
