import "./UploadVideo.scss";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import uploadLogo from "../../assets/Icons/upload.svg";
import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { useVideoContext } from "../Utils/Hooks";

export default function UploadVideo() {
  const { postVideo, fetchVideos } = useVideoContext();
  const [videoData, setVideoData] = useState({ title: "", description: "" });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const navigate = useNavigate();

  //EVENT WILL CHECK IF UPLOAD SUCESSFUL OR NOT THEN REDIRECT TO MAIN PAGE
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postVideo(videoData);
      setVideoData({ title: "", description: "" });
      setUploadSuccess(true);
      setTimeout(() => {
        setUploadSuccess(false);
        fetchVideos();
        navigate("/");
      }, 3000);
      setUploadError(false);
    } catch (error) {
      console.error("Error uploading video", error);
      setUploadError(true);
      setTimeout(() => setUploadError(false), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleCancel = () => {
    setVideoData({ title: "", description: "" });
    navigate("/");
  };

  return (
    <section className="upload">
      <div className="upload__titlebox">
        <h2 className="upload__title">Upload Video</h2>
      </div>
      <div className="upload__wrapper">
        <div className="upload__box">
          <div className="upload__label">VIDEO THUMBNAIL</div>
          <div className="upload__thumbnail">
            <img className="upload__thumbnailimg" src={uploadThumbnail} />
          </div>
        </div>
        <div className="upload__formbox">
          <form className="upload__form" onSubmit={handleSubmit}>
            <div className="upload__div">
              <label className="upload__label" htmlFor="addTitle">
                TITLE YOUR VIDEO
              </label>
              <input
                name="title"
                type="text"
                placeholder="Add a title to your video"
                className="upload__input"
                value={videoData.title}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="upload__div">
              <label className="upload__label" htmlFor="addDescription">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                name="description"
                type="text"
                placeholder="Add a description to your video"
                className="upload__textarea"
                value={videoData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="upload__buttonbox">
              <button
                type="button"
                onClick={handleCancel}
                className="upload__cancel"
              >
                <div className="upload__empty"></div>CANCEL
                <div></div>
              </button>
              <button type="submit" className="upload__buttonpublish">
                <img src={uploadLogo} /> PUBLISH <div></div>
              </button>
            </div>
          </form>
        </div>
      </div>
      {uploadSuccess && (
        <aside className="upload__successmessage">
          Uploaded Successfully! You will be redirected momentarily!
        </aside>
      )}
      {uploadError && (
        <aside className="upload__errormessage">
          Unable to upload. Please try again.
        </aside>
      )}
    </section>
  );
}
