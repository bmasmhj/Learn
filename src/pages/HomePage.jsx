import NavBar from "../model/NavBar";
import '../assets/css/cstm.scss'; 
import Courses from '../model/Courses';
import HeroHeader from "../model/HeroHeader";
import Teams from "../model/Teams";
import Footer from "../model/Footer";
import Alert from "../Controller/Alert";
import Feature from "../model/Feature";
import Languages from "../model/Languages";

function HomePage() {
  return (
    <>
        <Alert></Alert>
        <NavBar/>
        <HeroHeader/>
        <Feature/>
        <Courses/>
        <Languages/>
        <Teams/>
        <Footer/>


    </>
  );
}


export default HomePage;
