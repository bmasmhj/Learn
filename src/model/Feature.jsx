import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { useEffect } from "react";
function Feature(){
     useEffect(() => {
        AOS.init();

      }, [])
    return(
        <>
           <section class="m-0 py-5 bg-white position-relative">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                <div class="col-lg-3 mx-auto">
                    <div class="device-wrapper position-relative">
                    <img alt='course title' data-aos="fade-up" class="w-100 mt-7 z-index-1 ms-n10 position-relative shadow border-radius-md position-absolute  d-none d-sm-none d-md-none d-lg-block d-xl-block" src="https://learn.bimash.com.np/assets/img/thumbnails/dart-101-01-dart-in-100-seconds.png"/>
                    <img alt='course title' class="w-100 d-block d-md-none" src="http://learn.bimash.com.np/assets/img/ggg.png"/>
                    <img alt='course title' class="w-100 d-none  d-md-block  " src="http://learn.bimash.com.np/assets/img/ggg2.png"/>
                    <img alt='course title' data-aos="fade-up" class="w-100 bottom-0 z-index-1 position-relative shadow border-radius-md position-absolute ms-8 mb-5 d-none d-sm-none d-md-none d-lg-block d-xl-block" src="https://learn.bimash.com.np/assets/img/thumbnails/firebase-security-course-01-firebase-security-in-100-seconds.png"/>
                    </div>
                </div>
                <div class="col-lg-6 mx-auto mt-5">
                    <h3 class="text-gradient text-info mb-0">Where Can You Find</h3>
                    <h3>Free Course Videos</h3>
                    <p class="lead mb-5">Learn by Sharing</p>
                    <div class="row">
                    <div class="col-lg-6 col-6 mb-lg-3">
                        <h2 class="text-gradient text-info">17</h2>
                        <p>Courses</p>
                    </div>
                    <div class="col-lg-6 col-6 mb-lg-3">
                        <h2 class="text-gradient text-info">400+</h2>
                        <p>Videos</p>
                    </div>
                    <div class="col-lg-6 col-6">
                        <h2 class="text-gradient text-info">4</h2>
                        <p>Users</p>
                    </div>
                    <div class="col-lg-6 col-6">
                        <h2 class="text-gradient text-info">24/7</h2>
                        <p>Avaibility</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
    )
    }
    
    export default Feature