import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
function HomePage() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/trains");
  };

  return (
    <div className="page-bg">
      <div className="main-container">
        <NavBar />

        <div className="home-container">
          <section className="hero-section">
            <div className="hero-text">
              <h1>Book Trains. Travel Easy.</h1>
              <p>
                Search, compare and book your train tickets with a clean and
                simple desktop experience.
              </p>
            </div>

            <div className="hero-image-box">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiBX_ZApT9shr4Q_San4URirNfA6CdzqkCBMgZigusB-5G7mbr6M24hcYvwrtZRQTI0kzzoaaWcS1tL5Pe8wXylXAQEy6yOi2oSerQJ14IuzAjvg8orFRA99bxlS-UdYbZua7WgzRRH0Uh1umazoNpFsdG6Fs0qOXiehJRG4mAY2LNxu5n_5L6W0Kj7Rw/s1200/Vande%20Bharat%20Red%20Gray.jpg"
                alt="Train"
              />
            </div>
          </section>

          <section className="search-card">
            <div className="form-grid">
              <div className="form-group">
                <label>From</label>
                <input type="text" placeholder="New Delhi" />
              </div>

              <div className="form-group">
                <label>To</label>
                <input type="text" placeholder="Mumbai" />
              </div>

              <div className="form-group">
                <label>Journey Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Class</label>
                <select>
                  <option>All Classes</option>
                  <option>1A</option>
                  <option>2A</option>
                  <option>3A</option>
                  <option>SL</option>
                </select>
              </div>
            </div>

            <button className="primary-btn full-btn" onClick={handleSearch}>
              Search Trains
            </button>
          </section>

          <section className="route-section">
            <h3>Popular Routes</h3>
            <div className="route-grid">
              <div className="route-box">Delhi to Mumbai</div>
              <div className="route-box">Delhi to Kolkata</div>
              <div className="route-box">Bangalore to Chennai</div>
              <div className="route-box">Mumbai to Pune</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
