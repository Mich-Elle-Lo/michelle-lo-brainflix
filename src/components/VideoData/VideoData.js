import viewslogo from "../../assets/Icons/views.svg";
import likeslogo from "../../assets/Icons/likes.svg";
import "./VideoData.scss";
// import { videoDescription } from "../../Pages/Home";
// import { useContext } from "react";
import { useVideoContext } from "../Utils/Hooks";

export default function VideoData() {
  const { selectedVideo, formatTimeAgo } = useVideoContext();
  console.log(selectedVideo);
  return (
    <div className="videosection">
      <div className="videosection__title">{selectedVideo.title}</div>
      <div className="videosection__underline videosection__underline--mobile"></div>
      <div className="videosection__box">
        <div className="videosection__subbox">
          <div className="videosection__channel">{selectedVideo.channel}</div>
          <div className="videosection__timestamp">
            {formatTimeAgo(selectedVideo.timestamp)}
          </div>
        </div>
        <div className="videosection__subbox">
          <div className="videosection__logobox">
            <img
              className="videosection__logo"
              src={viewslogo}
              alt="Views logo"
            />
            <div className="videosection__views">{selectedVideo.views}</div>
          </div>
          <div className="videosection__logobox">
            <img
              className="videosection__logo"
              src={likeslogo}
              alt="Likes logo"
            />
            <div className="videosection__likes">{selectedVideo.likes}</div>
          </div>
        </div>
      </div>
      <div className="videosection__underline videosection__underline--tablet"></div>
      <div className="videosection__description">
        {selectedVideo.description}
      </div>
    </div>
  );
}
