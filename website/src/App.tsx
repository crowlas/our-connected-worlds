import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/travel" element={<TravelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
