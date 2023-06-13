import "./Section.css";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

const logoSrc = {
  vite: viteLogo,
  react: reactLogo,
};

export const Section = ({
  background,
  heading,
  content,
  image,
  header,
  footer,
}) => {
  return (
    <section style={{ backgroundColor: background }}>
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
      {footer && <footer />}
    </section>
  );
};
