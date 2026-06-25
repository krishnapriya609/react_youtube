import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import SearchFeed from "./pages/SearchFeed";
import VideoDetail from "./pages/VideoDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;