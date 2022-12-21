import HomePage from './pages/HomePage';
import {  Routes, Route } from "react-router-dom";
import './assets/css/cstm.css';
import Video from './pages/Video';
import AOS from "aos";
import { useEffect } from "react";

function App() {
   useEffect(() => {
        setTimeout(() => {
            AOS.init();
        }, 1500);
      });
  return (
    <>
      <Routes>
            {/* 👇️ handle dynamic path */}
            <Route path="Video/:course_id/:video_id" element={<Video />}/>
            <Route path="Video/:course_id/" element={<Video />}/>

            <Route path="Video/" element={<Video />} />
            {/* 👇️ only match this when no other routes match */}
            <Route
              path="*"
              element={
                    <HomePage/>
              }
            />
        </Routes>  
 
    </>
  );
}

export default App;
