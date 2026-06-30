import VideoCard from "./VideoCard";

function Videos({ videos }) {
  if (!videos || videos.length === 0) {
    return (
      <div
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "50px",
          fontSize: "20px",
        }}
      >
        No videos found.
      </div>
    );
  }

  return (
    <div className="videos-grid">
      {videos.map((video) => (
        <VideoCard
          key={video.id.videoId || video.id}
          video={video}
        />
      ))}
    </div>
  );
}

export default Videos;