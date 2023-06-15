import { useState, useRef } from "react";
import { PAGE_DATA } from "./data";
import { Section } from "./framework/Section";
import { Nav } from "./framework/Nav";

import "./App.css";

function App() {
  const [pageData] = useState(PAGE_DATA);
  const [activeSection, setActiveSection] = useState(null);
  const stateRel = {
    activeSection,
    setActiveSection,
  };
  const heroHeaderRef = useRef(); // only hero section has a header

  return (
    <>
      <Nav {...{ activeSection, heroHeaderRef }} />
      <main>
        {pageData.sections.map((section, i) => {
          // need to know the next section's bg colour to transition to it
          const nextSectionBg = pageData.sections[i + 1]
            ? pageData.sections[i + 1].meta.background
            : pageData.sections[i].meta.background;

          return (
            <Section
              key={section.meta.name}
              {...{ ...section, ...stateRel }}
              header={i === 0}
              nextSectionBg={nextSectionBg}
              heroHeaderRef={heroHeaderRef}
            />
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
