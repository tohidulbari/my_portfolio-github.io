import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowcaseView from "./pages/ShowcaseView";
import ShowcaseAll from "./pages/ShowcaseAll";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-view" element={<ShowcaseView />} />
      <Route path="/projects" element={<ShowcaseAll />} />
    </Routes>
  );
}

export default App;
