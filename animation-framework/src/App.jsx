import { useState } from "react";
import "./App.css";
import { PAGE_DATA } from "./data";
import { Section } from "./framework/Section";

function App() {
  const [pageData] = useState(PAGE_DATA);

  return (
    <>
      {pageData.sections.map((section, i) => {
        // need to know the next section's bg colour to transition to it
        const nextSectionBg = pageData.sections[i + 1]
          ? pageData.sections[i + 1].background
          : pageData.sections[i].background;

        return (
          <Section
            key={section.name}
            {...section}
            header={i === 0}
            nextSectionBg={nextSectionBg}
          />
        );
      })}
    </>
  );
}

export default App;

/**
<>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Vite + React</h1>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
</>
 */
