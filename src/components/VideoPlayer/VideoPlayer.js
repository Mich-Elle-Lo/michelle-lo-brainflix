// import { videoDescription } from "../../Pages/Home";
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
            style={{ width: "100%" }}
            poster={selectedVideo.image}
          >
            <source src={selectedVideo.video} />
          </video>
        </div>
      </section>
    </>
  );
}
