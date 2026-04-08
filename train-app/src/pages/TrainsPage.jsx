import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function TrainsPage() {
  const navigate = useNavigate();

  const trains = [
    {
      id: 1,
      name: "12951 Mumbai Rajdhani",
      from: "NDLS",
      to: "BCT",
      departure: "16:55",
      arrival: "08:10",
      duration: "15h 15m",
      rating: "4.5",
    },
    {
      id: 2,
      name: "22121 LTT Superfast",
      from: "NDLS",
      to: "LTT",
      departure: "20:10",
      arrival: "11:37",
      duration: "15h 20m",
      rating: "4.3",
    },
    {
      id: 3,
      name: "12259 Duronto Express",
      from: "NDLS",
      to: "BCT",
      departure: "22:45",
      arrival: "10:05",
      duration: "11h 20m",
      rating: "4.2",
    },
  ];

  return (
    <div className="page-bg">
      <NavBar />

      <div className="trains-layout">
        <aside className="filters-panel">
          <h3>Filters</h3>

          <div className="filter-block">
            <p>Class</p>
            <label>
              <input type="checkbox" /> 1A
            </label>
            <label>
              <input type="checkbox" /> 2A
            </label>
            <label>
              <input type="checkbox" /> 3A
            </label>
            <label>
              <input type="checkbox" /> SL
            </label>
          </div>

          <div className="filter-block">
            <p>Train Type</p>
            <label>
              <input type="checkbox" /> Express
            </label>
            <label>
              <input type="checkbox" /> Superfast
            </label>
            <label>
              <input type="checkbox" /> Duronto
            </label>
          </div>
        </aside>

        <section className="trains-list-section">
          <div className="section-top-row">
            <h2>Found 25 trains</h2>
            <select className="sort-select">
              <option>Sort by Departure</option>
              <option>Sort by Arrival</option>
              <option>Sort by Duration</option>
            </select>
          </div>

          {trains.map((train) => (
            <div className="train-card" key={train.id}>
              <div className="train-card-left">
                <h3>{train.name}</h3>
                <p>
                  {train.from} to {train.to}
                </p>
                <div className="time-row">
                  <div>
                    <span>{train.departure}</span>
                    <small>Departure</small>
                  </div>
                  <div>
                    <span>{train.duration}</span>
                    <small>Duration</small>
                  </div>
                  <div>
                    <span>{train.arrival}</span>
                    <small>Arrival</small>
                  </div>
                </div>
              </div>

              <div className="train-card-right">
                <p className="rating">★ {train.rating}</p>
                <button
                  className="primary-btn"
                  onClick={() => navigate("/seats")}
                >
                  View Seats
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default TrainsPage;
