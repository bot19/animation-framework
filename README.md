# Webpage sectional animation framework PoC

An animation framework prototype/proof-of-concept (PoC) that allows you to animate in section elements on a webpage with many sections.

This set of requirements is for a particular project so it is very specific & in its entirity might not be applicable to other projects, but parts of it might be useful to repurpose.

1. fix borders
2. finalise features/objectives
3. add preview

[Image]

## 🏁 Features/objectives

1. each page has multiple sections
2. each section can have the following elements: optional background footer, background colour and content (heading, text, image)
3. only the 1st section will have a background header, if nav bg is set to `true` it should kick in as you begin to scroll down the page, not on render when page is in original position (the header will be the nav's bg)
4. You should be able to animate in elements with different timings and direcions
5. animations to be triggered by scrolling into sections; once animated in, they do not need to animate out on reverse scroll
6. a section can also dictate what the nav should be like when that section is active
7. on window resize, calculations should update in an optimised way so everything works correctly
8. this PoC is limited to desktop resolution (not responsive)
9. sections should be a reuseable component
10. use react.js & `IntersectionObserver`

section data code?
each section should "blend" into the next...

## 🖥️ Tech

1. [vite.js](https://vitejs.dev/) `v4.3`
2. [react.js](https://react.dev/) `v18.2`

## 🚀 How to run

1. Fork & clone this repo
2. Have Node `v18` (or newer),
3. Get `yarn` or `npm`
4. In terminal go to DIR &amp; `cd animation-frameework`
5. Run `yarn` or `npm install`
6. On successful installation, run `yarn dev` or `npm run dev`
7. Finally, open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## 📝 Notes

1. Cool CSS colours & their names [here](https://www.quackit.com/css/css_color_codes.cfm)
2. helpful: https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/
3. [helpful codepen](https://codepen.io/bot19/pen/VwVvRbq) from the article above (my fork, fixed an issue)
4. ChatGPT 3.5 assisted; [my demo #1](https://codesandbox.io/s/test-react-intersectional-observer-set-section-as-active-when-majority-in-vp-9lvnsv) of functionality required
5. [my demo #2](https://codesandbox.io/s/test-react-intersectional-observer-nav-knows-which-section-it-is-over-gyjpvj) making the nav know which section it is over
