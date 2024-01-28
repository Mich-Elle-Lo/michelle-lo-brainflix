import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const { videoId } = useParams();
  const apiKey = "7b621a10-171d-40ee-80c4-68f110785e04";
  const baseUrl = "https://project-2-api.herokuapp.com/";

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  //FETCH VIDEO LIST & LOAD FIRST VIDEO DETAILS
  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${baseUrl}videos?api_key=${apiKey}`);
      setVideos(response.data);
      if (!videoId && response.data.length > 0) {
        fetchVideoDetails(response.data[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  //FETCH VIDEO DETAILS
  const fetchVideoDetails = async (videoId) => {
    try {
      const response = await axios.get(
        `${baseUrl}videos/${videoId}?api_key=${apiKey}`
      );
      setSelectedVideo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchVideoDetails(videoId);
    }
  }, [videoId]);

  const handleSelectVideo = async (clickedID) => {
    await fetchVideoDetails(clickedID);
  };

  //FILTER VIDEO
  const filteredVideo = videos.filter((video) => video.id !== selectedVideo.id);

  //   TIME FORMAT
  const formatTimeAgo = (timestamp) => {
    return moment(timestamp).fromNow();
  };

  const funcValue = {
    videos,
    selectedVideo,
    formatTimeAgo,
    handleSelectVideo,
    filteredVideo,
    apiKey,
    baseUrl,
  };
  return (
    <VideoContext.Provider value={funcValue}>{children}</VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  return useContext(VideoContext);
};
