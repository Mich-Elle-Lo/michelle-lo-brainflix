import "./comments.scss";
import commentAdd from "../../assets/Icons/add_comment.svg";
import { useVideoContext } from "../Utils/Hooks";

export default function Comments() {
  const { selectedVideo, formatTimeAgo } = useVideoContext();

  const comments = selectedVideo?.comments || [];
  const commentsNum = comments.length;

  return (
    <>
      <div className="comments">
        <div className="comments__num">{commentsNum} comments</div>
        <div className="comments__form">
          <form className="comments__wrapper">
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
                    placeholder="Add a new comment"
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
        </div>

        {comments.map((comment) => (
          <div className="comments__card" key={comment.id}>
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
          </div>
        ))}
      </div>
    </>
  );
}
