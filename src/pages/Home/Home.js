import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Crypto101 from "../../components/Crypto101/Crypto101";
import LearnMore from "../../components/LearnMore/LearnMore";
import CryptoBenefits from "../../components/CryptoBenefits/CryptoBenefits";
import LearnMore2 from "../../components/LearnMore2/LearnMore2";
import Footer from "../../components/Footer/Footer";

export default function Home(props) {
  return (
    <div>
      <Hero />
      <Crypto101 />
      <LearnMore />
      <CryptoBenefits />
      <LearnMore2 />
      <Footer />
    </div>
  );
}
