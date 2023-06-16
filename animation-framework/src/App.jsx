import { useEffect, useState, useRef } from "react";
import { PAGE_DATA } from "./data";
import { Section } from "./framework/Section";
import { Nav } from "./framework/Nav";

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
        if (
          entry.boundingClientRect.top <= 128 &&
          entry.boundingClientRect.bottom >= 128
        ) {
          console.log("navSection", entry.target.dataset.index);
          setNavSection(entry.target.dataset.index);
        }
      });
    };

    // 60px is the height of the nav
    const options = {
      root: document,
      rootMargin: "-128px 0px 0px 0px",
      threshold: [...Array(100).keys()].map((x) => x / 100),
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
                {...{ ...section }}
                header={i === 0}
                nextSectionBg={nextSectionBg}
                heroHeaderRef={heroHeaderRef}
                sectionIndex={i}
                sectionRefArr={sectionRefArr.current}
              />
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;

/**
<>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
</>
 */
