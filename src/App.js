import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Blogs from "./Components/Blogs/Blogs";
import ServicesPage from "./Components/ServicesPage/ServicesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <ServicesPage></ServicesPage>
          </Route>
          <Route path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
