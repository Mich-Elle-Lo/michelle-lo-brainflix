import { useState, createContext } from "react";
import "./styles/global.scss";
import Header from "./components/header/Header";
import VideoPlayer from "./components/video/VideoPlayer";
import VideoData from "./components/VideoData/VideoData";
import Comments from "./components/Comments/Comments";
import Data from "./Data/videos.json";
import videoDetails from "./Data/video-details.json";

export const videoDescription = createContext();

function App() {
  const [videos, setVideo] = useState(Data[0]);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  console.log(selectedVideo);
  return (
    <>
      <videoDescription.Provider
        value={{
          videos: videos,
          selectedVideo: selectedVideo,
        }}
      >
        <Header />
        <VideoPlayer />
        <VideoData />
        <Comments />
      </videoDescription.Provider>
    </>
  );
}

export default App;
