import "./comments.scss";
import { useState } from "react";
import commentAdd from "../../assets/Icons/add_comment.svg";
import { useVideoContext } from "../Utils/Hooks";

export default function Comments() {
  const { selectedVideo, formatTimeAgo, postComment } = useVideoContext();
  const [commentText, setCommentText] = useState("");

  const comments = selectedVideo?.comments || [];
  const commentsNum = comments.length;

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    await postComment(selectedVideo.id, { comment: commentText });
    setCommentText("");
  };
  return (
    <>
      <section className="comments">
        <div className="comments__num">{commentsNum} comments</div>
        <article className="comments__form">
          <form className="comments__wrapper" onSubmit={handleCommentSubmit}>
            <div className="comments__mobilebox">
              <div className="comments__displaybox">
                <div className="comments__displaypic"></div>
              </div>
              <div className="comments__formbox">
                <div className="comments__inputbox">
                  <label className="comments__label" htmlFor="addComment">
                    JOIN THE CONVERSATION
                  </label>
                  <textarea
                    className="comments__input"
                    id="addComment"
                    type="text"
                    spellCheck="true"
                    value={commentText}
                    placeholder="Add a new comment"
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                </div>
                <button className="comments__button" type="submit">
                  <img
                    className="comments__logo"
                    src={commentAdd}
                    alt="add comment logo"
                  />
                  Comment
                  <div className="comments__emptybox"></div>
                </button>
              </div>
            </div>
          </form>
        </article>

        {comments.map((comment) => (
          <article className="comments__card" key={comment.id}>
            <div className="comments__displaybox">
              <div className="comments__displaypic comments__displaypic--comment"></div>
            </div>
            <div className="comments__commentbox">
              <div className="comments__nametime">
                <p className="comments__name">{comment.name}</p>
                <p className="comments__time">
                  {formatTimeAgo(comment.timestamp)}
                </p>
              </div>
              <div className="comments__comment">
                <p className="comments__text">{comment.comment}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
