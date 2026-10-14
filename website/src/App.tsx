import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopNavBar from "./components/common/TopNavBar";
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";

function App() {
  return (
    <BrowserRouter>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/travel" element={<TravelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
