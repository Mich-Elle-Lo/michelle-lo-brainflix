import { useState } from "react";
import moment from "moment";
import Data from "../../Data/videos.json";
import videoDetails from "../../Data/video-details.json";

//UseVideoSelection Hook

const useVideoSelection = () => {
  const [videos, setVideos] = useState(Data);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  //ClickedID
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

  return { handleSelectVideo, filteredVideo, formatTimeAgo, selectedVideo };
};

export default useVideoSelection;
