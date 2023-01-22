import { useEffect ,useState } from "react";
import { ReactComponent as Svg } from "../assets/img/wifi.svg";


export default function InternetDetector(){
    const [statuss , setstatus ] = useState();
    
    const offlineoronline = async () => {
        window.addEventListener("offline", (event) => {
            var stat = 'offline';
            setstatus(stat);
        });
        window.addEventListener("online", (event) => {
            var stat = 'online';
            setstatus(stat);
        });
    };
    useEffect(() => {
        offlineoronline();
    },[]);

return(
    <>
        <div className={statuss+" card z-index-max position-fixed internetstat"} id='internetstat'>
            <div className="card-body p-3">
            <div className="d-flex align-items-center">
                <h2 className="text-sm mb-0 text-capitalize font-weight-bold">You are {statuss}</h2>
                <div className="mx-2 icon icon-shapes bg-gradient shadow text-center border-radius-md">
                    <Svg/>
                </div>
            </div>
            </div>
        </div>
        </>
    ) 

}


