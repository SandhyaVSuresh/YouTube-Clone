import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/HomePage/Home";
import Video from "./Pages/VideoPage/Video";
import { useState } from "react";

function App() {

  const [sidebar, setSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Router>
        <Navbar setSidebar={setSidebar} setSearchQuery={setSearchQuery}/>
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} searchQuery={searchQuery} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
