import { videoDescription } from "../../App";
import { useContext } from "react";

export default function VideoPlayer() {
  const { selectedVideo } = useContext(videoDescription);

  return (
    <>
      <div className="video">
        <div className="video__wrapper">
          <video
            className="video__player"
            controls
            style={{ width: "100%" }}
            poster={selectedVideo.image}
          >
            <source src={selectedVideo.video} />
          </video>
        </div>
      </div>
    </>
  );
}
