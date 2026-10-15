import { NavLink } from "react-router-dom";

export default function TopNavBar() {
  return (
    <header className="top-nav">
      <nav className="top-nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/travel">Travel</NavLink>
        <NavLink to="/technical">Technical</NavLink>
        <NavLink to="/compatibility">What it is not ?</NavLink>
        <NavLink to="/safety">Safety & Ownership</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </nav>
    </header>
  );
}
