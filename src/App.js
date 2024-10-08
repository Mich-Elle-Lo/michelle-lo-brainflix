import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoProvider } from "./components/Utils/Hooks";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home";
import Upload from "./Pages/Upload";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <VideoProvider>
          <>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/videos/:id" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        </VideoProvider>
      </BrowserRouter>
    </>
  );
}
