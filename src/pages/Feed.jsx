import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchFromAPI(
      `search?part=snippet&q=${selectedCategory}&maxResults=20`
    )
      .then((data) => {
        setVideos(data.items || []);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <>
      <Navbar />

      <div className="feed">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div style={{ flex: 1 }}>
          <h2
            style={{
              padding: "20px",
              color: "white",
            }}
          >
            {selectedCategory} Videos
          </h2>

          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <CircularProgress color="error" />
            </div>
          ) : (
            <Videos videos={videos} />
          )}
        </div>
      </div>
    </>
  );
}

export default Feed;