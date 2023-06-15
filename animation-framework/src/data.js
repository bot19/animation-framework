/**
 * would be better with TS, but need this ASAP
 * (1) 1st section works slightly diff to other sections, explained indepth incomponent; need this so nav content can be seen above below elements clearly
 * it's important that the sections are in order of their rendered position from page top to bottom
 */
export const PAGE_DATA = {
  sections: [
    {
      meta: {
        id: "section-1",
        position: 1,
        name: "section 1 hero HotPink", // name of section
        nav: true, // true to show nav BG appropriate to section (1)
        background: "HotPink", // name of CSS colour
        header: true, // only hero/1st section can have a header
        footer: true, // optional background footer; has section bg colour transition
      },
      content: {
        heading: "I'm the hero section",
        text: "",
        image: "vite", // using the Vite or React logos provided
      },
    },
    {
      meta: {
        id: "section-2",
        position: 2,
        name: "section 2 Tomato",
        nav: true,
        background: "Tomato",
        footer: true,
      },
      content: {
        heading: "A section with 2 Col",
        text: "Icon fonts have become extremely popular in recent times and due to an excellent reason. They scale really nicely and increase in size with enhanced quality, as compared to raster images. In addition to that, since the font icon is essentially a text, you can easily apply CSS to change the color and adjust the size.",
        image: "react",
      },
    },
    {
      meta: {
        id: "section-3",
        position: 3,
        name: "section 3 MediumOrchid",
        nav: true,
        background: "MediumOrchid",
        footer: true,
      },
      content: {
        heading: "A boring section with just text",
        text: "Those of you who like font icons know that they come with a plethora of advantages. To begin with, their performance is phenomenal, and so are their aesthetics since they look well even in displays of high pixel density. Another massive benefit of these fonts is that you can change the size of these icon fonts in a matter of minutes without any requirement of Photoshop or any applications.",
        image: "",
      },
    },
    {
      meta: {
        id: "section-4",
        position: 4,
        name: "section 4 DeepSkyBlue",
        nav: false,
        background: "DeepSkyBlue",
        footer: true,
      },
      content: {
        heading: "The final section, no more nav bg",
        text: "",
        image: "",
      },
    },
  ],
};
