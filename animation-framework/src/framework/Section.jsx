import { useEffect, useState, useRef } from "react";
import "./Section.css";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

const logoSrc = {
  vite: viteLogo,
  react: reactLogo,
};

export const Section = ({
  id,
  background,
  heading,
  content,
  image,
  header,
  footer,
  nextSectionBg,
  setActiveSection,
  setNavActive,
}) => {
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
        console.log(
          "entry",
          entry.isIntersecting,
          entry.boundingClientRect.top
        );
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          setNavActive(entry.target.id);
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
  }, [setActiveSection, setNavActive]);

  return (
    <section ref={sectionRef} id={id} style={{ backgroundColor: background }}>
      {header && <header />}
      <article>
        {Boolean(heading.length) && <h1>{heading}</h1>}
        <div>
          {Boolean(image.length) && (
            <img src={logoSrc[image]} className="logo" alt={`${image} logo`} />
          )}
          {Boolean(content.length) && <p>{content}</p>}
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
