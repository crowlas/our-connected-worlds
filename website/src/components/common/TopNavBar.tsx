import { NavLink } from "react-router-dom";

export default function TopNavBar() {
  return (
    <header className="top-nav">
      <nav className="top-nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/travel">Travel</NavLink>

        <NavLink to="/creators">Creators</NavLink>

        <NavLink to="/technical">Technical</NavLink>
      </nav>
    </header>
  );
}
