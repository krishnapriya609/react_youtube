import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function VideoDetail() {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(
      `videos?part=snippet,statistics&id=${id}`
    ).then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((data) => setRelatedVideos(data.items));
  }, [id]);

  if (!videoDetail) return "Loading...";

  return (
    <>
      <Navbar />

      <div className="video-detail-container">
        <div className="video-player-section">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width="100%"
          />

          <h2 className="video-title">
            {videoDetail.snippet.title}
          </h2>

          <p className="channel-name">
            {videoDetail.snippet.channelTitle}
          </p>

          <div className="stats">
            <span>
              👁 {Number(
                videoDetail.statistics.viewCount
              ).toLocaleString()} views
            </span>

            <span>
              👍 {Number(
                videoDetail.statistics.likeCount
              ).toLocaleString()} likes
            </span>
          </div>
        </div>

        <div className="related-videos">
          <Videos videos={relatedVideos} />
        </div>
      </div>
    </>
  );
}

export default VideoDetail;