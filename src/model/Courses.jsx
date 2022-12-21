import Aos from "aos";
import { useEffect } from "react";

function Courses() {
      useEffect(() => {
           Aos.init();
      });
  return (
    <>
    
 <div class="container">
                <div class="row">
                    <section class="py-5">
                        <div class="container">
                            <div class="row text-center justify-content-center">
                                <div class="col-lg-6">
                                    <h3 class="mt-4">
                                        <span class="text-gradient text-info">Popular Courses</span>
                                    </h3>
                                    <p class="lead">We’re constantly trying to express ourselves and actualize our
                                        dreams. If you have
                                        the
                                        opportunity to play this game of life you need to appreciate every moment.</p>
                                </div>
                            </div>
                            <div class="row mt-5" id="popcourses">
                                    <a href="course.html"  data-aos="fade-up"  class="col-lg-3 mb-3 ">
                                        <div class="card bg-transparent move-on-hover">
                                            <div class="card-body p-0">
                                                <img class="w-100" src="https://learn.bimash.com.np/assets/img/thumbnails/cloud-functions-master-course-02-what-is-serverless.png" alt="" />
                                            </div>
                                        </div>
                                        <h6 class="p-3">Course Title</h6>

                                    </a>
                                    <a href="course.html"  data-aos="fade-up" data-aos-delay="100" class="col-lg-3 mb-3 ">
                                        <div class="card bg-transparent move-on-hover">
                                            <div class="card-body p-0">
                                                <img class="w-100"
                                                    src="https://learn.bimash.com.np/assets/img/thumbnails/dart-101-01-dart-in-100-seconds.png"
                                                    alt="" />
                                            </div>
                                        </div>
                                        <h6 class="p-3">Course Title</h6>
                                    
                                    </a>
                                    <a href="course.html"  data-aos="fade-up" data-aos-delay="200" class="col-lg-3 mb-3 ">
                                        <div class="card bg-transparent move-on-hover">
                                            <div class="card-body p-0">
                                                <img class="w-100"
                                                    src="https://learn.bimash.com.np/assets/img/thumbnails/firebase-security-course-01-firebase-security-in-100-seconds.png"
                                                    alt="" />
                                            </div>
                                        </div>
                                        <h6 class="p-3">Course Title</h6>
                                    
                                    </a>
                                    <a href="course.html"  data-aos="fade-up" data-aos-delay="300" class="col-lg-3 mb-3 ">
                                        <div class="card bg-transparent move-on-hover">
                                            <div class="card-body p-0">
                                                <img class="w-100"
                                                    src="https://learn.bimash.com.np/assets/img/thumbnails/firestore-data-modeling-01-resources.png"
                                                    alt="" />
                                            </div>
                                        </div>
                                        <h6 class="p-3">Course Title</h6>
                                    
                                    </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    </>
  );
}

export default Courses;