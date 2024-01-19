import { videoDescription } from "../../App";
import { useContext } from "react";

export default function Comments() {
  const { selectedVideo } = useContext(videoDescription);

  const comments = selectedVideo?.comments || [];
  return (
    <>
      <div className="comments">
        <div className="comments__form">JOIN THE CONVERSATION</div>
        <div className="comments__card">
          {comments.map((comment) => (
            <div key={comment.id}>
              <div className="comments__box">
                <p>{comment.name}</p>
                <p>{comment.timestamp}</p>
              </div>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
