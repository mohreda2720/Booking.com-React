import Header from "../../components/header/Header";
import Navbar from "./../../components/navbar/Navbar";
import Featured from "./../../components/featured/Featured";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import TourProperties from "../../components/tourProperties/TourProperties";
import MailList from "./../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer  mt-5 d-flex flex-column align-items-center gap-5">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        {/* <FeaturedProperties /> */}
        <TourProperties/>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
