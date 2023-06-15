import "./Nav.css";

export const Nav = ({ activeSection, navActive }) => {
  const navBg = navActive?.navBackground;

  return (
    <nav
      style={{ backgroundColor: navBg ? navActive?.background : "transparent" }}
      className={navBg ? "background" : ""}
    >
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
