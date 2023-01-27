import { useEffect  } from "react";


export default function AdBlockDetector(){
    const adblockdetection = async () => {
            const detect = document.querySelector("#detect");
            const wrapper = document.querySelector(".wrapper");
            const blockeroverlay = document.querySelector(".blockeroverlay");

            const button = wrapper.querySelector("button");
            let adClasses = ["ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"];
            for(let item of adClasses){
            detect.classList.add(item);
            }
            let getProperty = window.getComputedStyle(detect).getPropertyValue("display");
            if(!wrapper.classList.contains("show")){
                if(getProperty === "none"){
                    wrapper.classList.add("show") 
                    blockeroverlay.classList.add("show") 

                }else{
                    wrapper.classList.remove("show");
                    blockeroverlay.classList.remove("show");

                }
                 
            }
            button.addEventListener("click", ()=>{
                wrapper.classList.remove("show");
                blockeroverlay.classList.remove("show");
            });
    };
    useEffect(() => {
        setTimeout(() => {
        adblockdetection();
            
        }, 5000);
    },[]);

return(
        <>
            <div id="detect"> </div>
            <div className="blockeroverlay">
                <div className="wrapper">
                    <div className="content">
                    <div className="warn-icon">
                        <span className="icon"><i className="fas fa-exclamation"></i></span>
                    </div>
                    <h2>AdBlock Detected!</h2>
                    <p>This website don't have ads so no need of adblocker. you can whitelist our website</p>
                        <button className="btn bg-gradient btn-primary">Okay, I'll Whitelist</button>
                    </div>
                </div>
           </div>

        </>
    ) 

}


