import React from "react";
import "./VideoList.scss";
import { videoDescription } from "../../App";
import { useContext } from "react";

export default function VideoList({ filteredVideo, handleSelectVideo }) {
  return (
    <>
      <div className="videolist">
        <div className="videolist__title">Next Videos</div>
        {filteredVideo.map((video) => (
          <div
            className="videolist__card"
            key={video.id}
            onClick={() => handleSelectVideo(video.id)}
          >
            <div className="videolist__info">
              <div className="videolist__imgbox">
                <img
                  className="videolist__img"
                  src={video.image}
                  alt="video thumbnail"
                />
              </div>
              <div className="videolist__infobox">
                <div className="videolist__title">{video.title}</div>
                <div className="videolist__channel">{video.channel}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
