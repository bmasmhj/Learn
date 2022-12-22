import NavBar from "../model/NavBar";
import '../assets/css/cstm.css'; 

import Courses from '../model/Courses';
import HeroHeader from "../model/HeroHeader";
import Teams from "../model/Teams";
import Footer from "../model/Footer";
import Feature from "../model/Feature";
import Languages from "../model/Languages";
function HomePage() {


  return (
    <>
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
