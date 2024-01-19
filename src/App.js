import { useState, createContext } from "react";
import "./styles/global.scss";
import Header from "./components/header/Header";
import VideoPlayer from "./components/video/VideoPlayer";
import VideoData from "./components/VideoData/VideoData";
import Data from "./Data/videos.json";
import videoDetails from "./Data/video-details.json";

export const videoDescription = createContext();

function App() {
  const [videos, setVideo] = useState(Data[0]);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  console.log(videos);

  return (
    <>
      <videoDescription.Provider
        value={{ videos: videos, selectedVideo: selectedVideo }}
      >
        <Header />
        <VideoPlayer />
        <VideoData />
      </videoDescription.Provider>
    </>
  );
}

export default App;
