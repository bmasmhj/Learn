import { NavLink } from "react-router-dom";


function Courses() {
  return (
    <>
        <section className="m-0 py-5 bg-white position-relative">
            <div className="container">
                <div className="row">
                    <section className="py-5">
                        <div className="container">
                            <div className="row text-center justify-content-center">
                                <div className="col-lg-6">
                                    <h3 className="mt-4">
                                        <span className="text-gradient text-info">Popular Courses</span>
                                    </h3>
                                    <p className="lead">We're constantly trying to express ourselves and actualize our
                                        dreams. If you have
                                        the
                                        opportunity to play this game of life you need to appreciate every moment.</p>
                                </div>
                            </div>
                            <div className="row mt-5" id="popcourses">
                                    <PopularCourse/>
                            </div>
                            <span>see more</span>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </>
  );
}

function PopularCourse(){
     return (
    <>
        <NavLink to="Video/cloud-functions-master-course"  data-aos="fade-up"  className="col-lg-3 mb-3 ">
            <div className="card bg-transparent move-on-hover">
                <div className="card-body p-0">
                    <img className="w-100" src="https://learn.bimash.com.np/assets/img/thumbnails/cloud-functions-master-course-02-what-is-serverless.png" alt="course title" />
                </div>
            </div>
            <h6 className="p-3">Course Title</h6>
        </NavLink>
    </>
  );
}
export default Courses;