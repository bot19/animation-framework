import { useEffect, useState } from "react";
import "./Nav.css";

/**
 * all 1st/hero sections have a header that the nav sits on top of
 * this is so content in this section can sit over the header (used as nav bg)
 * however, once you start scrolling beyond the page render state
 * you want the nav bg to kick in so it can be clearly above page contents
 * the nav bg also is dictated by the section's meta data
 */
export const Nav = ({ activeSection, heroHeaderRef }) => {
  const navBg = activeSection?.navBackground;
  const [activeNav, setActiveNav] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // when hero section's header is 50% out
    };

    const handleIntersection = (entries) => {
      // should only be 1 entry, as each section has own IO
      entries.forEach((entry) => {
        // console.log("entry", entry.isIntersecting, entry.intersectionRatio);
        setActiveNav(!entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const refCached = heroHeaderRef.current; // otherwise react complains

    if (refCached) {
      observer.observe(refCached);
    }

    return () => {
      if (refCached) {
        observer.unobserve(refCached);
      }
    };
  }, [setActiveNav]);

  return (
    <nav>
      <div className="nav__container">
        <div
          className={`nav__bg ${navBg ? "background" : ""} ${
            activeNav ? "is-active" : ""
          }`}
          style={{
            backgroundColor: navBg ? activeSection?.background : "transparent",
          }}
        ></div>
        <div className="nav__content">
          <h1>Animation framework PoC</h1>
          <p>
            Section active <b>{activeSection?.id}</b>
          </p>
        </div>
      </div>
    </nav>
  );
};
