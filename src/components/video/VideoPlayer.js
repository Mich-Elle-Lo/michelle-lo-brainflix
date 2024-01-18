import { useState } from "react";
import ReactPlayer from "react-player";
import data from "../../Data/videos.json";

export default function VideoPlayer() {
  const [videos, setImg] = useState(data);

  const imgUrl = videos[0].image;
  const videoUrl = "https://youtu.be/bv_cEeDlop0?feature=shared";
  return (
    <>
      <div className="video">
        <ReactPlayer
          className="video__player"
          controls
          width="100%"
          height="25rem"
          url={videoUrl}
          light={imgUrl}
        />
      </div>
    </>
  );
}
console.log(data);
