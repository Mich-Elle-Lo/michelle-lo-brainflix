import React from "react";
import "./VideoList.scss";
import { useNavigate } from "react-router-dom";
import { useVideoContext } from "../Utils/Hooks";

export default function VideoList() {
  const { filteredVideo, handleSelectVideo } = useVideoContext();

  const navigate = useNavigate();

  const handleClick = (videoId) => {
    handleSelectVideo(videoId);
    navigate(`/videos/${videoId}`);
  };

  return (
    <>
      <section className="videolist">
        <h2 className="videolist__title">Next Videos</h2>
        {filteredVideo.map((video) => (
          <div
            className="videolist__card"
            key={video.id}
            onClick={() => handleClick(video.id)}
          >
            <div className="videolist__info">
              <div className="videolist__imgbox">
                <img
                  className="videolist__img"
                  src={video.image}
                  alt="video thumbnail"
                />
                {console.log(video.image)}
              </div>
              <div className="videolist__infobox">
                <div className="videolist__title">{video.title}</div>
                <div className="videolist__channel">{video.channel}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
