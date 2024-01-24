import React, { useState, createContext } from "react";
import moment from "moment";
import "../styles/global.scss";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import VideoData from "../components/VideoData/VideoData";
import Comments from "../components/Comments/Comments";
import VideoList from "../components/VideoList/VideoList";
import Data from "../Data/videos.json";
import videoDetails from "../Data/video-details.json";
import useVideoSelection from "../components/Utils/Hooks";

export const videoDescription = createContext();

function Home() {
  const {
    videos,
    handleSelectVideo,
    filteredVideo,
    formatTimeAgo,
    selectedVideo,
  } = useVideoSelection();

  return (
    <>
      <videoDescription.Provider
        value={{
          videos: videos,
          selectedVideo: selectedVideo,
          formatTimeAgo: formatTimeAgo,
        }}
      >
        <div className="app">
          <VideoPlayer />
          <div className="app__desktop">
            <div className="app__box">
              <VideoData selectedVideo={selectedVideo} />
              <Comments />
            </div>
            <div className="app__box2">
              <VideoList
                filteredVideo={filteredVideo}
                handleSelectVideo={handleSelectVideo}
              />
            </div>
          </div>
        </div>
      </videoDescription.Provider>
    </>
  );
}

export default Home;
