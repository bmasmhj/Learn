import { NavLink } from "react-router-dom";
function VideoPreview({currElem , uniqid }){
    return(
        <>
         <NavLink data-aos='fade-in' to={`/video/${currElem.video_uri}`} className="pb-2 mb-3 col-md-4 col-sm-6 col-12 col-xl-3 ">
          <div className="video_thumbnails">
            <img alt='course name' className="card w-100 preview p-0  col-5" src={currElem.thumbnail}  />
            <h6 className="m-0 p-2">{currElem.title}</h6>
          </div>

        </NavLink> 
        </>
    )
}

export default VideoPreview;