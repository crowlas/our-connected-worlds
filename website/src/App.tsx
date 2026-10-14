import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopNavBar from "./components/common/TopNavBar";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
