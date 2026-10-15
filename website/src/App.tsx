import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopNavBar from "./components/common/TopNavBar";
import CompatibilityPage from "./pages/CompatibilityPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import TravelPage from "./pages/TravelPage";

function App() {
  return (
    <BrowserRouter>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/technical" element={<TechnologyPage />} />
        <Route path="/compatibility" element={<CompatibilityPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
