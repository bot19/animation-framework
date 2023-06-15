import "./Nav.css";

export const Nav = ({ activeSection, navActive }) => {
  return (
    <nav>
      <h1>Animation framework PoC</h1>
      {navActive && (
        <p>
          Section active <b>{activeSection.id}</b> / Section controlling nav{" "}
          <b>{navActive.id}</b>
        </p>
      )}
    </nav>
  );
};
