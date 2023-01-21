import HomePage from './pages/HomePage';
import {  Routes, Route } from "react-router-dom";
import './assets/css/cstm.css';
import Video from './pages/Video';
import Course from './pages/Course';
import AllCourse from './pages/AllCourse';

import FindVideo from './pages/FindVideo';

function App() {
  return (
    <>
      <Routes>
            {/* 👇️ handle dynamic path */}
            <Route path="Video/:course_id/:video_id" element={<Video />}/>
            <Route path="Video/:course_id/" element={<Course />}/>
            <Route path="Video/" element={<FindVideo />} />
            <Route path="AllCourse/" element={<AllCourse />} />

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
