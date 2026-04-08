import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainsPage from "./pages/TrainsPage";
import SeatsPage from "./pages/SeatsPage";
import PassengerPage from "./pages/PassengerPage";
// import PaymentPage from "./pages/PaymentPage";
// import ConfirmationPage from "./pages/ConfirmationPage";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trains" element={<TrainsPage />} />
          <Route path="/seats" element={<SeatsPage />} />
          <Route path="/passengers" element={<PassengerPage />} />
        {/* <Route path="/payment" element={<PaymentPage />} /> */}
        {/* <Route path="/confirmation" element={<ConfirmationPage />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
