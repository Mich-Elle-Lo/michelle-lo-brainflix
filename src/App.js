import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home";
import Upload from "./Pages/Upload";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
