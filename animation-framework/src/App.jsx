import { useEffect, useState, useRef } from "react";
import { PAGE_DATA } from "./data";
import { Section } from "./framework/Section";
import { Nav } from "./framework/Nav";
import { SETTINGS } from "./constants";

import "./App.css";

function App() {
  const [pageData] = useState(PAGE_DATA);
  const [navSection, setNavSection] = useState(null);
  const heroHeaderRef = useRef(); // only hero section has a header
  const sectionRefArr = useRef([]); // all section refs in 1 ref array

  // IO: which sections under nav
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        // set index of section currently under the nav
        // FIXME: issue on section change but IO slow to pickup, why?
        if (
          entry.boundingClientRect.top <= SETTINGS.navHeight &&
          entry.boundingClientRect.bottom >= SETTINGS.navHeight &&
          entry.intersectionRatio > 0.01
        ) {
          console.log(
            "navSection",
            entry.target.dataset.index,
            entry.boundingClientRect
          );
          setNavSection(entry.target.dataset.index);
        }
      });
    };

    const options = {
      root: document,
      rootMargin: `-${SETTINGS.navHeight}px 0px 0px 0px`,
      threshold: [...Array(101).keys()].map((x) => x / 100),
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sectionRefArr.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [setNavSection]);

  const setRef = (index) => (ref) => {
    sectionRefArr.current[index] = ref;
  };

  return (
    <>
      <Nav
        navSectionMeta={pageData.sections[navSection]?.meta}
        heroHeaderRef={heroHeaderRef}
      />
      <main>
        {pageData.sections.map((section, i) => {
          // need to know the next section's bg colour to transition to it
          const nextSectionBg = pageData.sections[i + 1]
            ? pageData.sections[i + 1].meta.background
            : pageData.sections[i].meta.background;

          return (
            <div ref={setRef(i)} data-index={i} key={section.meta.name}>
              <Section
                {...section}
                header={i === 0}
                nextSectionBg={nextSectionBg}
                heroHeaderRef={heroHeaderRef}
              />
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
