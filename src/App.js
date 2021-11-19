import './App.scss';
import Home from './pages/Home/Home'
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}