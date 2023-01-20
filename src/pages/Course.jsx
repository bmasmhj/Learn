import { useEffect, useState } from "react";
import NavBar from "../model/NavBar";
import Instance from "../axios";
import VideoPreview from "../model/VideoPlayer/VideoPreview";
import { useParams } from "react-router-dom";

export default function VideoPage(){
    const {course_id} = useParams();

    const [allplaylist , setplaylist] = useState([]);
    const [course_title , setcourse_title ] = useState();


    const getplaylist = async () => {
        try {
            const res_course = await Instance.get(`/course_info.php?course_id=${course_id}`);

            const res_video = await Instance.get(`/get_img.php?course_id=${course_id}`);
            setplaylist(res_video.data);

            const course_title_res = res_course.data[0].name;
            setcourse_title(course_title_res);
        } catch (error) {
            console.log("error", error);
        }
    };
    useEffect(() => {
        getplaylist();
    },[]);

    if(allplaylist !== undefined){
        return(
            <>
            <NavBar></NavBar>
            <div className="container px-2 px-md-8 mt-8">
                <h4 className="mb-5" id="class_title">{course_title}</h4>
                <div className="row">
                {
                allplaylist.map((currElem) => {
                    return (
                        <>
                            <VideoPreview
                                key = {currElem.id.toString()+Math.floor((Math.random() * 100) + 1)}
                                currElem = {currElem}                         
                            />
                        </>
                    );
                })
                }
                </div>
               
            </div>

            </>
        )
    }

}
