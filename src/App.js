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

  //CLICK ID FUNCTION
  const handleSelectVideo = (clickedID) => {
    const foundVideo = videoDetails.find((video) => clickedID === video.id);
    setSelectedVideo(foundVideo);
  };

  //FILTER VIDEO
  const filteredVideo = videos.filter((video) => video.id !== selectedVideo.id);

  //TIME FORMAT
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
        <div className="app">
          <Header />
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

export default App;
