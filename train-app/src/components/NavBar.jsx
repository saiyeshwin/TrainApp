import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo-box">
          <i class="fa-solid fa-train"></i>
        </div>
        <div>
          <h2 className="logo-title">Railway</h2>
          <p className="logo-subtitle">Book your journey</p>
        </div>
      </div>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/trains">Trains</Link>
        <Link to="/seats">Seats</Link>
        <Link to="/payment">Payment</Link>
      </nav>

      <div className="navbar-user">Sai Yeshwin</div>
    </header>
  );
}

export default NavBar;
