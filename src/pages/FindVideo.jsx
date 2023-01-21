import { useEffect, useState } from "react";
import NavBar from "../model/NavBar";
import Instance from "../axios";
import VideoPreview from "../model/VideoPlayer/VideoPreview";


export default function FindVideo(){
  const [allplaylist, setCard] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

   const getAllVideo = async () => {
        try {
            const res_video = await Instance.get(`/get_all.php?offset=`+page);
            setCard((prev) => [...prev, ...res_video.data]);
            setLoading(false);
        } catch (error) {
            console.log("error", error);
        }
    };

  useEffect(() => {
    getAllVideo();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 20);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
       <NavBar></NavBar>
            <div className="container px-2 px-md-8 mt-8">
                <div className="row">
                {allplaylist.map((currElem) => {
                    return (
                        <>
                           <VideoPreview  key={currElem.id.toString()+Math.floor((Math.random() * 100) + 1)} currElem={currElem} />
                        </>
                    );
                })}
                </div>
                {loading &&  <h5 className="text-center p-5" id='allbooks'>Loading..</h5>}
            </div>
    </>
  );
};
