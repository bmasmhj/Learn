import Comments from "../Comments";
import { useNavigate , NavLink } from "react-router-dom";
import { useState } from "react";
function VideoPlayer({VIDEO_URI , currElems , course_title}){
    const history = useNavigate();
    const [next_video , setnextvideo] = useState([]);
    const nxt = [];
    const autoplay = localStorage.getItem('autoplay');
    if(autoplay === 'true') {
        if(document.getElementById('autoplay_next')){
            document.getElementById('autoplay_next').checked = true;
        }
    }else{
        localStorage.setItem('autoplay', false);
    }

    const autoplaymode = () =>{
        if(localStorage.getItem('autoplay')){
             if(localStorage.getItem('autoplay') === 'true') {
                localStorage.setItem('autoplay', 'false');
            }else{
                localStorage.setItem('autoplay', 'true');
                document.getElementById('autoplay_next').checked = true;
            }
        }
    }

    const checkfinis = () => {
         var thumbnails = document.getElementsByClassName("video_thumbnail");
        for (var i = 0; i < thumbnails.length; i++) {
            if (thumbnails[i].classList.contains("active")) {
                var href = thumbnails[i+1].getAttribute("href");
                var src =  thumbnails[i+1].getElementsByTagName('img')[0].src;
                var floattitle =  thumbnails[i+1].getElementsByTagName('div')[0].getElementsByTagName('h6')[0].innerHTML;
                nxt.push(href);
                nxt.push(src);
                nxt.push(floattitle);
                setnextvideo(nxt);
                break;
            }
        }
       
       if(document.getElementById('full_video')){
            var video = document.getElementById('full_video');
            var autplay_black = document.getElementById("autplay_black");
            autplay_black.style.height = video.offsetHeight+'px';
            autplay_black.style.width = video.offsetWidth+"px";

                  video.addEventListener('timeupdate', function() {
                    var currentTime = video.currentTime;
                    var duration = video.duration;
                    if(currentTime > duration-5) {
                        autplay_black.classList.add('activate')
                    }
                    if(currentTime === duration ){
                        if(document.getElementById('autoplay_next')){
                            const autoplay_next = document.getElementById('autoplay_next');
                            if (autoplay_next.checked === true){
                                history(href)
                            } else {
                            }
                        }
                    }
                    
                });
            }
    }


    
    return(
        <>
          <div className="videopanel">
            <div className="autoplay " id="autplay_black">
                <div className="next card" style={{background: `url(${next_video[1]})`}} id="showcaseimg">
                    <NavLink className="p-3" to={next_video[0]} id='next_title'>{next_video[2]}</NavLink>
                </div> 
            </div>
            <video autoPlay={true} onDurationChange={checkfinis} className="w-100" controls={true} controlsList="nodownload" id="full_video" src={VIDEO_URI}></video>
            <h5 className="video-title text-dark"> {course_title} | {currElems.title}</h5>
        </div>
        <hr/>
            
            <div className="d-md-flex justify-content-between align-items-center">
                <div className="text-center">
                    <button className="btn btn-rounded bg-gradient btn-info"><i className="fa-regular fa-bookmark"></i> Add To Favorite</button>
                </div>
                <div className="d-flex justify-content-between align-items-center interactions">
                    <div className="p-2 ">
                        <div className="form-check form-switch ps-0">
                            Auto Play <input  onChange={autoplaymode} id='autoplay_next' className="form-check-input ms-auto" type="checkbox" /> 
                        </div>
                    </div>
                    <span className="p-2 h5 "><i className="fa-duotone fa-messages"></i><span id='totallikes' className="mx-2">20</span></span>
                    <span className="p-2 h5 "><i className="fa-solid fa-heart text-danger"></i><span id='totallikes' className="mx-2">10</span></span>
                    <button className="btn btn-rounded "><i className="fa-light fa-share"></i> Share </button>
                    <button className="btn btn-rounded  p-2"><i className="fa-solid fa-ellipsis"></i> </button>
                </div>
            </div>
            <div className="card bg-gray-101">
                <div className="card-body">
                    <div className="description">
                    <p>   We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed. </p>
                    </div>
                       <div className="tags ">
                            <span className="badge badge-sm badge-info ">#nextjs</span>
                            <span className="badge badge-sm badge-info ">#javascript</span>
                            <span className="badge badge-sm badge-info ">#firebase</span>
                            <span className="badge badge-sm badge-info ">#react</span>
                       </div>
                </div>
            </div>
            <Comments/>

        </> 
    )
}

export default VideoPlayer;