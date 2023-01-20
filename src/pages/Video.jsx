import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import NavBar from "../model/NavBar";
import PlayList from "../model/VideoPlayer/Playlist";
import Instance from "../axios";
import VideoPlayer from "../model/VideoPlayer/Video";
const VIDEO_URI = 'https://learn.bimash.com.np/assets/videos/';

export default function Video(){
    const {course_id, video_id} = useParams();
    const [allplaylist , setplaylist] = useState([]);
    const [video_info , setvideo] = useState([]);
    const [course_title , setcourse_title ] = useState();


    const getplaylist = async () => {
        try {
            const res_course = await Instance.get(`/course_info.php?course_id=${course_id}`);
            const res_playlist = await Instance.get(`/get_img.php?course_id=${course_id}`);
            const res_video = await Instance.get(`/get_video.php?course_id=${course_id}/${video_id}`);
            setplaylist(res_playlist.data);
            setvideo(res_video.data);
            const course_title_res = res_course.data[0].name;
            setcourse_title(course_title_res);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getplaylist();
    }, [course_id , video_id]);

    if(allplaylist !== undefined){
        return(
            <>
            <NavBar></NavBar>
            <div className="container-fluid px-2 px-lg-5 px-xl-8 px-md-4 mt-6 mt-md-8">
                <div className="video_player hidden">
                    <div className="row">
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            {video_info.map((currElems) => {
                                return (
                                    <>
                                        <VideoPlayer
                                            course_title = {course_title}
                                            key={video_id}
                                            VIDEO_URI={VIDEO_URI+course_id+'/'+video_id}
                                            currElems = {currElems}
                                        />
                                    </>
                                );
                            })}
                        </div>
                        <div className="col-md-3  col-xs-12" id="">
                             <h4 className="" id="class_title">{course_title}</h4>
                            <div id="video-previews" className="mbl p-4 m-0">
                                {allplaylist.map((currElem) => {
                                    return (
                                        <>
                                            <PlayList 
                                                key={currElem.id+Math.floor((Math.random() * 100) + 1).toString()}
                                                currElem = {currElem}                         
                                            />
                                        </>
                                    );
                                })}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }

}
