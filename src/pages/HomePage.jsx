import NavBar from "../model/NavBar";
import '../assets/css/cstm.css'; 
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { ReactComponent as Svg } from "../assets/img/waves.svg";
import Courses from '../model/Courses';
function HomePage() {
      const el = useRef(null);
        useEffect(() => {
            const typed = new Typed(el.current, {
      strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
        }, []);

  return (
    <>
        <NavBar/>
         <header class="position-relative ">
            <div class="page-header min-vh-100" id='#hero-header'>
                <span class="mask blur bg-gradient-dark"></span>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 text-start">
                            <h1 class="text-white">Start Learning <span ref={el}></span>
                            </h1>
                            <p class="lead text-white text-start pe-5 mt-4">The more you share is the more you learn.
                                This website aims to share free courses from many source. </p>
                            <br />
                            <div class="buttons">
                                <button type="button" class="btn btn-lg btn-white">Contact Us</button>
                                <button type="button" class="btn btn-lg btn-link text-white">Submit Courses</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-absolute w-100 z-index-1 bottom-0">
                 <Svg/>
            </div>
        </header>
        <Courses/>

    </>
  );
}


export default HomePage;
