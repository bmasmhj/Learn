import HomePage from './pages/HomePage';
import {  Routes, Route } from "react-router-dom";
import './assets/css/cstm.css';
import Video from './pages/Video';
import VideoPage from './pages/VideoPage';
import Course from './pages/Course';

function App() {
  return (
    <>
      <Routes>
            {/* 👇️ handle dynamic path */}
            <Route path="Video/:course_id/:video_id" element={<Video />}/>
            <Route path="Video/:course_id/" element={<Course />}/>

            <Route path="Video/" element={<VideoPage />} />
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
