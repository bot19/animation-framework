import { useEffect, useRef } from "react";
import "./Section.css";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

const logoSrc = {
  vite: viteLogo,
  react: reactLogo,
};

/**
 * only hero/1st section has a bg header
 */
export const Section = ({
  meta,
  content,
  nextSectionBg,
  setActiveSection,
  setNavActive,
  heroHeaderRef,
}) => {
  const { id, background, position, footer } = meta;
  const { heading, text, image } = content;
  const sectionRef = useRef();

  useEffect(() => {
    const options = {
      root: null, // uses VP
      rootMargin: "0px",
      threshold: 0.66, // execute CB when most of section in VP
    };

    const handleIntersection = (entries) => {
      // should only be 1 entry, as each section has own IO
      entries.forEach((entry) => {
        // console.info("entry", entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveSection(meta);
          setNavActive(meta);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const sectionRefCached = sectionRef.current; // otherwise react complains

    if (sectionRefCached) {
      observer.observe(sectionRefCached);
    }

    return () => {
      if (sectionRefCached) {
        observer.unobserve(sectionRefCached);
      }
    };
    // don't know why this isn't complaining that 'meta' isn't watched
  }, [setActiveSection, setNavActive, meta]);

  return (
    <section ref={sectionRef} id={id} style={{ backgroundColor: background }}>
      {position === 1 && <header ref={heroHeaderRef} />}
      <article>
        {Boolean(heading.length) && <h2>{heading}</h2>}
        <div>
          {Boolean(image.length) && (
            <img src={logoSrc[image]} className="logo" alt={`${image} logo`} />
          )}
          {Boolean(text.length) && <p>{text}</p>}
        </div>
      </article>
      {footer && (
        <footer
          style={{
            backgroundImage: `linear-gradient(to bottom, ${background}, ${nextSectionBg})`,
          }}
        />
      )}
    </section>
  );
};
