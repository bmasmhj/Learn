import { NavLink } from "react-router-dom";
function VideoPreview({currElem}){
    return(
        <>
         <NavLink data-aos='fade-in' to={`/video/${currElem.video_uri}`} className="pb-2 mb-3 col-md-4 col-sm-6 col-12 col-xl-3 ">
           <div className="card bg-transparent move-on-hover">
                <div className="card-body p-0">
                    <img className="w-100" src={currElem.thumbnail} alt="course title" />
                </div>
            </div>
            <h6 className="p-3">{currElem.title}</h6>
        </NavLink> 
        </>
    )
}

export default VideoPreview;