import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function VideoDetail() {
  const { id } = useParams();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideo(data.items[0]))
      .catch((err) => console.error(err));
  }, [id]);

  if (!video) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
    <iframe
  width="100%"
  height="600"
  src={`https://www.youtube.com/embed/${id}?autoplay=1`}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

      <h2 style={{ marginTop: "20px" }}>
        {video.snippet.title}
      </h2>

      <p>{video.snippet.channelTitle}</p>

      <p>
        👁 {Number(video.statistics.viewCount).toLocaleString()} views
      </p>
    </div>
  );
}

export default VideoDetail;