import { NavLink } from "react-router-dom";
import { useState , useEffect } from "react";
import Instance from "../axios";
import NavBar from "../model/NavBar";

function AllCourse() {
    const [popularlist , setpopularcourse] = useState([]);
    const pupularcourses = async () => {
        try {
            const res_course = await Instance.get(`/get_all_course.php`);
            setpopularcourse(res_course.data);
        } catch (error) {
            console.log("error", error);
        }
    };
    useEffect(() => {
        pupularcourses();
    },[]);

  return (
    <>
        <NavBar></NavBar>
        <section className="m-0 py-5 bg-white position-relative">
            <div className="container">
                <div className="row">
                    <section className="py-5">
                        <div className="container">
                            <div className="row text-center justify-content-center">
                                <div className="col-lg-6">
                                    <h3 className="mt-4">
                                        <span className="text-gradient text-info">All Courses</span>
                                    </h3>
                                    <p className="lead">You got this buddy, Choose anyone and become pro</p>
                                </div>
                            </div>
                            <div className="row mt-5" id="popcourses">
                                {
                                popularlist.map((resdata)=>{
                                        return(
                                            <>
                                                <PopularCourse 
                                                    data={resdata}
                                                />
                                            </>
                                        )
                                })
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </>
  );
}

function PopularCourse({data}){
     return (
    <>
        <NavLink to={`../Video/`+data.course_id}  data-aos="fade-up"  className="col-lg-3 mb-3 ">
            <div className="card bg-transparent move-on-hover">
                <div className="card-body p-0">
                    <img className="w-100" src={data.thumbnail} alt="course title" />
                </div>
            </div>
            <h6 className="p-3">{data.name}</h6>
        </NavLink>
    </>
  );
}
export default AllCourse;