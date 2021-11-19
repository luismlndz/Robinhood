import "./Home.scss";
import Stats from "../../components/Stats/Stats";
import Hero from "../../components/Hero/Hero";
import Crypto101 from "../../components/Crypto101/Crypto101";
import LearnMore from "../../components/LearnMore/LearnMore";
import CryptoBenefits from "../../components/CryptoBenefits/CryptoBenefits";

export default function Home(props) {
  return (
    <div>
      <Hero />
      <Crypto101 />
      <LearnMore />
      <CryptoBenefits />
    </div>
  );
}
