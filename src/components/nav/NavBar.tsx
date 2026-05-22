import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Michael Jackson</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/albums">Albums</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}