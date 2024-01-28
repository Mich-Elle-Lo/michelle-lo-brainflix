import React, { useState, createContext } from "react";
import "../styles/global.scss";
import { useVideoContext } from "../components/Utils/Hooks";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import VideoData from "../components/VideoData/VideoData";
import Comments from "../components/Comments/Comments";
import VideoList from "../components/VideoList/VideoList";

export default function Home() {
  return (
    <>
      <div className="app">
        <VideoPlayer />
        <div className="app__desktop">
          <div className="app__box">
            <VideoData />
            <Comments />
          </div>
          <div className="app__box2">
            <VideoList />
          </div>
        </div>
      </div>
    </>
  );
}
