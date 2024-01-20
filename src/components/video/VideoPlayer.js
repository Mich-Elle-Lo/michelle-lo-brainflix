import { videoDescription } from "../../App";
import { useContext } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  const { selectedVideo } = useContext(videoDescription);

  return (
    <>
      <div className="video">
        <div className="video__wrapper">
          <ReactPlayer
            className="video__player"
            controls
            width="auto"
            height="25rem"
            url={selectedVideo.video}
            light={selectedVideo.image}
          />
        </div>
      </div>
    </>
  );
}
