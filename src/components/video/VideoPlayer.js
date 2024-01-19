import { videoDescription } from "../../App";
import { useContext } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer(props) {
  const { videos, selectedVideo } = useContext(videoDescription);
  // const imgUrl = selectedVideo;
  // const videoUrl = props.details.video;
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
            light={videos.image}
          />
        </div>
      </div>
    </>
  );
}
