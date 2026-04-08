import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function SeatsPage() {
  const navigate = useNavigate();

  const coachData = {
    A1: Array.from({ length: 24 }, (_, i) => i + 1),
    A2: Array.from({ length: 24 }, (_, i) => i + 25),
  };

  const [selectedCoach, setSelectedCoach] = useState("A1");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const totalPrice = selectedSeats.length * 1865;

  return (
    <div className="page-bg">
      <NavBar />

      <div className="seat-page-container">
        <div className="train-info-box">
          <h2>12951 Mumbai Rajdhani</h2>
          <p>16:55 NDLS to 08:10 BCT</p>
          <p>Coach {selectedCoach}</p>
        </div>

        {/* Coach Switch */}
        <div className="coach-tabs">
          {Object.keys(coachData).map((coach) => (
            <button
              key={coach}
              className={`tab-btn ${selectedCoach === coach ? "active" : ""}`}
              onClick={() => {
                setSelectedCoach(coach);
                setSelectedSeats([]); // reset seats when switching coach
              }}
            >
              {coach}
            </button>
          ))}
        </div>

        {/* Seats */}
        <div className="seat-grid">
          {coachData[selectedCoach].map((seat) => (
            <button
              key={seat}
              className={`seat-box ${
                selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </button>
          ))}
        </div>

        {/* Summary */}
        <div className="bottom-summary">
          <div>
            <h3>Selected Seats</h3>
            <p>
              {selectedSeats.length > 0
                ? `${selectedCoach}: ${selectedSeats.join(", ")}`
                : "None"}
            </p>
          </div>
          <div>
            <h3>Total</h3>
            <p>₹ {totalPrice}</p>
          </div>
        </div>

        <button
          className="primary-btn continue-btn"
          onClick={() =>
            navigate("/passengers", {
              state: { selectedSeats, totalPrice },
            })
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SeatsPage;
