import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const { videoId } = useParams();
  const baseUrl = "http://localhost:3000/";

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  //FETCH VIDEO LIST & LOAD FIRST VIDEO DETAILS
  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${baseUrl}videos`);
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
      const response = await axios.get(`${baseUrl}videos/${videoId}`);
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

  //POST VIDEO
  const postVideo = async (videoData) => {
    try {
      const response = await axios.post(`${baseUrl}videos/`, videoData);
      console.log(response);
      console.log("added video", response.data);
    } catch (error) {
      console.error("error error", error);
    }
  };

  //POST COMMENTS
  const postComment = async (videoId, commentData) => {
    try {
      const response = await axios.post(
        `${baseUrl}videos/${videoId}/comments`,
        commentData
      );
      console.log(response);
      console.log("added comment", response.data);
      fetchVideoDetails(videoId);
    } catch (error) {
      console.error("error error", error);
    }
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
    fetchVideos,
    formatTimeAgo,
    handleSelectVideo,
    filteredVideo,
    postComment,
    baseUrl,
    postVideo,
  };
  return (
    <VideoContext.Provider value={funcValue}>{children}</VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  return useContext(VideoContext);
};
