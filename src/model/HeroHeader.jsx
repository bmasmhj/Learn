import { ReactComponent as Svg } from "../assets/img/waves.svg";
import { useEffect, useRef } from "react";
import { Particle } from "./Particle";
import Typed from "typed.js";




function HeroHeader() {

    const el = useRef(null);
useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React Js", "Firebase", "Flutter", "NextJs"], 
      startDelay: 100,
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
      <header className="position-relative w-100">
            <div className="page-header min-vh-100">
                <Particle/>
                <span className="mask blur bg-gradient-dark"></span>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 text-start">
                            <h1 className="text-white">Start Learning <span className="text-gradient text-info" ref={el}></span>
                            </h1>
                            <p className="lead text-white text-start pe-5 mt-4">The more you share is the more you learn.
                                This website aims to share free courses from many source. </p>
                            <br />
                            <div className="buttons">
                                <button type="button" className="btn btn-lg btn-white">Contact Us</button>
                                <button type="button" className="btn btn-lg btn-link text-white">Submit Courses</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute w-100 z-index-1 bottom-0">
                 <Svg/>
            </div>
        </header>
    </>
  )
}


export default HeroHeader;