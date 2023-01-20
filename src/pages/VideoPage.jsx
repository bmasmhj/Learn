import { useEffect, useState } from "react";
import NavBar from "../model/NavBar";
import Instance from "../axios";
import VideoPreview from "../model/VideoPlayer/VideoPreview";

export default function VideoPage(){
    const [allplaylist , setplaylist] = useState([]);

    const getplaylist = async () => {
        try {
            const res_video = await Instance.get(`/get_all.php?`);
            setplaylist(res_video.data);
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
                <div className="row">
                {allplaylist.map((currElem) => {
                    return (
                        <>
                            <VideoPreview
                                key = {currElem.id.toString()+Math.floor((Math.random() * 100) + 1)}
                                currElem = {currElem}                         
                            />
                        </>
                    );
                })}
                </div>
                <h5 className="text-center p-5">Loading..</h5>
               
            </div>

            </>
        )
    }

}
