import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/howitworks' component={HowItWorks}/>
      </Switch>
    </Router>
  );
}
