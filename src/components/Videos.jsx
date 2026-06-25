import VideoCard from "./VideoCard";

function Videos({ videos }) {
  return (
    <div className="videos-grid">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
}

export default Videos;