import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Crypto101 from "./components/Crypto101/Crypto101";
import LearnMore from "./components/LearnMore/LearnMore";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Crypto101 />
      <LearnMore />
      <Home />
    </div>
  );
}
