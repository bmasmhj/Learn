import { NavLink } from "react-router-dom";
import { useState , useEffect } from "react";
import Instance from "../axios";

export default function SomeCourse() {
    const [popularlist , setpopularcourse] = useState([]);
    const someCourses = async () => {
        try {
            const res_course = await Instance.get(`/get_all_course.php`);
            setpopularcourse(res_course.data);
        } catch (error) {
            console.log("error", error);
        }
    };
    useEffect(() => {
        someCourses();
    },[]);

  return (
    <>
        <h4 className="mt-5">Similar Courses</h4>
        {
        popularlist.map((resdata)=>{
                return(
                    <>
                        <CourseDetails 
                            data={resdata}
                        />
                    </>
                )
        })
        }
    </>
  );
}

function CourseDetails({data}){
     return (
    <>
        <NavLink to={`../Video/`+data.course_id}  data-aos="fade-up"  className="col-lg-3 mb-3 p-3">
            <div className="card w-100 bg-transparent move-on-hover">
                <div className="card-body p-0">
                    <img className="w-100" src={data.thumbnail} alt="course title" />
                </div>
            </div>
            <h6 className="p-3">{data.name}</h6>
        </NavLink>
    </>
  );
}