import viewslogo from "../../assets/Icons/views.svg";
import likeslogo from "../../assets/Icons/likes.svg";
import "./VideoData.scss";
import { videoDescription } from "../../App";
import { useContext } from "react";
export default function VideoData() {
  const { selectedVideo } = useContext(videoDescription);
  return (
    <div className="videosection">
      <div className="videosection__title">{selectedVideo.title}</div>
      <div className="videosection__underline videosection__underline--mobile"></div>
      <div className="videosection__box">
        <div className="videosection__subbox">
          <div className="videosection__channel">{selectedVideo.channel}</div>
          <div className="videosection__timestamp">
            {selectedVideo.timestamp}
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
