import React, { useState, createContext } from "react";
import moment from "moment";
import "./styles/global.scss";
import Header from "./components/header/Header";
import VideoPlayer from "./components/video/VideoPlayer";
import VideoData from "./components/VideoData/VideoData";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";
import Data from "./Data/videos.json";
import videoDetails from "./Data/video-details.json";

export const videoDescription = createContext();

function App() {
  const [videos, setVideos] = useState(Data);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  const handleSelectVideo = (clickedID) => {
    const foundVideo = videoDetails.find((video) => clickedID === video.id);
    setSelectedVideo(foundVideo);
  };

  const filteredVideo = videos.filter((video) => video.id !== selectedVideo.id);

  const formatTimeAgo = (timestamp) => {
    return moment(timestamp).fromNow();
  };

  return (
    <>
      <videoDescription.Provider
        value={{
          videos: videos,
          selectedVideo: selectedVideo,
          formatTimeAgo: formatTimeAgo,
        }}
      >
        <Header />
        <VideoPlayer />
        <VideoData selectedVideo={selectedVideo} />
        <Comments />
        <VideoList
          filteredVideo={filteredVideo}
          handleSelectVideo={handleSelectVideo}
        />
      </videoDescription.Provider>
    </>
  );
}

export default App;
