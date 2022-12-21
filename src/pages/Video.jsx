import Recommendation from "../model/Recommend";
function Video(){
    
    return(
        <>
        <div className="container-fluid px-2 px-md-8 mt-8">
            <div className="video_player hidden">
                <div className="row">
                    <div className="col-md-9 col-xs-12">
                        <div className="panel panel-primary panel-full-video">
                            <video autoPlay={true} className="w-100" controls={true} controlsList="nodownload" id="full_video" src="https://learn.bimash.com.np/assets/videos/vs-code-magic-tricks-course/02-cli.mp4"></video>
                            <div className="panel-body">
                                <h2 className="video-title text-primary"></h2>
                                <p className="video-lead"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mbl col-xs-12" id="">
                        <h4 className="" id="class_title"> Class Title </h4>
                        <div id="video-previews">
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <Recommendation/>
        </>
    )
}

export default Video;