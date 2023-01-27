import { NavLink } from "react-router-dom";

function PlayList({currElem }){
    return(
        <>
         <NavLink to={`/video/${currElem.video_uri}`} className="row  p-2 video_thumbnail" >
            <img alt='course name' className="card p-0 f-xh col-5" src={currElem.thumbnail}  />
            <div className="col-7 d-flex flex-column justify-space-between">
                <h6 className="m-0  ">{currElem.title}</h6>
                <p className=" playing p-0 pb-3 m-0 d-flex align-items-end  justify-content-between"><span> <i className="fa-duotone fa-timer"></i> {currElem.duration} Duration </span> <br/>  <span>{currElem.views} views </span></p>
            </div>
        </NavLink> 
        <hr/>

        </>
    )
}

export default PlayList;