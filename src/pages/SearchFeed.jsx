import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${searchTerm}&maxResults=20`
    ).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2 style={{ marginBottom: "20px" }}>
          Search Results for: {searchTerm}
        </h2>

        <Videos videos={videos} />
      </div>
    </>
  );
}

export default SearchFeed;