import "./VideoPlayer.scss";
import { useVideoContext } from "../Utils/Hooks";

export default function VideoPlayer() {
  const { selectedVideo } = useVideoContext();

  return (
    <>
      <section className="video">
        <div className="video__wrapper">
          <video
            className="video__player"
            controls
            poster={selectedVideo.image}
          >
            <source src={selectedVideo.video} />
          </video>
        </div>
      </section>
    </>
  );
}
