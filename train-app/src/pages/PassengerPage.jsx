import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function PassengerPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const selectedSeats = state?.selectedSeats || [];
  const totalPrice = state?.totalPrice || 0;

  return (
    <div className="page-bg">
      <NavBar />

      <div className="passenger-page-container">
        <div className="booking-top-box">
          <h2>Selected Seats: {selectedSeats.join(", ")}</h2>
        </div>

        {/* Dynamic passengers */}
        {selectedSeats.map((seat, index) => (
          <div className="passenger-card" key={seat}>
            <h3>
              Passenger {index + 1} (Seat {seat})
            </h3>
            <div className="passenger-grid">
              <input type="text" placeholder="Full Name" />
              <input type="number" placeholder="Age" />
              <select>
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <select>
                <option>Berth</option>
                <option>Lower</option>
                <option>Middle</option>
                <option>Upper</option>
              </select>
            </div>
          </div>
        ))}

        <div className="passenger-footer-row">
          <h2>Total Amount: ₹ {totalPrice}</h2>
          <button className="primary-btn">Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default PassengerPage;
