import "./UploadVideo.scss";
import { Link } from "react-router-dom";
import uploadLogo from "../../assets/Icons/upload.svg";
import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";

export default function UploadVideo() {
  return (
    <section className="upload">
      <div className="upload__titlebox">
        <div className="upload__title">Upload Video</div>
      </div>
      <div className="upload__wrapper">
        <div className="upload__box">
          <div className="upload__label">VIDEO THUMBNAIL</div>
          <div className="upload__thumbnail">
            <img className="upload__thumbnailimg" src={uploadThumbnail} />
          </div>
        </div>
        <div className="upload__formbox">
          <form className="upload__form">
            <div className upload__div>
              <label className="upload__label" htmlFor="addTitle">
                TITLE YOUR VIDEO
              </label>
              <input
                type="text"
                placeholder="Add a title to your video"
                className="upload__input"
              ></input>
            </div>
            <div className upload__div>
              <label className="upload__label" htmlFor="addDescription">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                type="text"
                placeholder="Add a description to your video"
                className="upload__textarea"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
      <div className="upload__buttonbox">
        <button className="upload__cancel">
          <div className="upload__empty"></div>CANCEL
          <div></div>
        </button>
        <button className="upload__buttonpublish">
          <img src={uploadLogo} /> PUBLISH <div></div>
        </button>
      </div>
    </section>
  );
}
