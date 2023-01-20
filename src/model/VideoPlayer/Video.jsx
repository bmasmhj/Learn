
function VideoPlayer({VIDEO_URI , currElems , course_title}){
    return(
        <>
          <div className="panel panel-primary panel-full-video">
            <video autoPlay={true} className="w-100" controls={true} controlsList="nodownload" id="full_video" src={VIDEO_URI}></video>
            <div className="panel-body">
                <h2 className="video-title text-dark">{course_title} | {currElems.title}</h2>
            </div>
        </div>
        <hr/>

        </>
    )
}

export default VideoPlayer;