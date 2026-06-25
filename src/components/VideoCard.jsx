import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id.videoId}`}>
      <div className="video-card">
        <img
          src={video.snippet.thumbnails.high.url}
          alt=""
        />

        <h3>{video.snippet.title}</h3>

        <p>{video.snippet.channelTitle}</p>
      </div>
    </Link>
  );
}

export default VideoCard;