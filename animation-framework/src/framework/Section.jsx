import { useEffect, useRef, useState } from "react";
import "./Section.css";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import { SETTINGS } from "../constants";

const logoSrc = {
  vite: viteLogo,
  react: reactLogo,
};

/**
 * only hero/1st section has a bg header
 */
export const Section = ({
  meta = {},
  content = {},
  nextSectionBg,
  heroHeaderRef,
}) => {
  const { id, background, position, footer } = meta;
  const { heading, text, image } = content;
  const sectionRef = useRef();
  const [animated, setAnimated] = useState(false);
  const animatedElement = `${animated ? "animate" : ""}`; // run animation class

  // initialise IO to animate section when 66% in VP; then unobserve post
  useEffect(() => {
    const options = {
      root: null, // uses VP
      rootMargin: "0px",
      threshold: [...Array(101).keys()].map((x) => x / 100),
    };

    const handleIntersection = (entries) => {
      // should only be 1 entry, as each section has own IO
      entries.forEach((entry) => {
        /**
         * to accommodate sections smaller or bigger than VP
         * smaller sections can be fully in VP, ratio = 1/+; round to 1
         * bigger sections partially in VP, need to find this ratio; < 1
         * then * 0.6 to find when it's mostly in VP, ie: 60% threshold
         */
        const maxIntersectionRatio =
          Math.min(
            (entry.rootBounds.height / entry.boundingClientRect.height).toFixed(
              2
            ),
            1
          ) * SETTINGS.intersectionThreshold;

        if (
          entry.isIntersecting &&
          entry.intersectionRatio > maxIntersectionRatio
        ) {
          console.info(
            "entry: animated",
            id,
            entry.isIntersecting,
            entry.intersectionRatio,
            maxIntersectionRatio
          );
          setAnimated(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const sectionRefCached = sectionRef.current; // otherwise react complains

    // no need to observe anymore once we've animated the section
    if (!animated && sectionRefCached) {
      observer.observe(sectionRefCached);
    }

    return () => {
      if (sectionRefCached) {
        observer.unobserve(sectionRefCached);
      }
    };
  }, [animated]);

  return (
    <section ref={sectionRef} id={id} style={{ backgroundColor: background }}>
      {position === 1 && (
        <header
          ref={heroHeaderRef}
          className={`to-animate animate-slide-in-top ${animatedElement}`}
        />
      )}
      <article>
        {Boolean(heading.length) && (
          <h2
            className={`to-animate animate-slide-in-left animate-order-2 ${animatedElement}`}
          >
            {heading}
          </h2>
        )}
        <div>
          {Boolean(image.length) && (
            <img
              src={logoSrc[image]}
              className={`logo to-animate animate-slide-in-left animate-order-3 ${animatedElement}`}
              alt={`${image} logo`}
            />
          )}
          {Boolean(text.length) && (
            <p
              className={`to-animate animate-slide-in-right animate-order-3 ${animatedElement}`}
            >
              {text}
            </p>
          )}
        </div>
      </article>
      {footer && (
        <footer
          className={`to-animate animate-slide-in-bottom ${animatedElement}`}
          style={{
            backgroundImage: `linear-gradient(to bottom, ${background}, ${nextSectionBg})`,
          }}
        />
      )}
    </section>
  );
};
