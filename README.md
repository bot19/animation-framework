# Webpage sectional animation framework

An animation framework prototype/proof-of-concept (PoC) that allows you to animate in section elements on a webpage with many sections.

This set of requirements is for a particular project so it is very specific & in its entirity might not be applicable to other projects, but parts of it might be useful to repurpose.

[Image]

## 📝 Requirements

1. each page has multiple sections
2. each section can have the following elements: optional background footer, colour and content (heading, text, image)
3. only the 1st section will have a background header, if nav bg is set to `true` it should kick in as you begin to scroll down the page, not on render when page is in original position
4. You should be able to animate in elements with different timings and direcions
5. animations to be triggered by scrolling into sections; once animated in, they do not need to animate out on reverse scroll
6. a section can also dictate what the nav should be like when that section is active
7. on window resize, calculations should update in an optimised way so everything works correctly
8. this PoC is limited to desktop resolution (not responsive)
9. sections should be a reuseable component
10. use react.js

## 🖥️ Tech & resources

1. [vite.js](https://vitejs.dev/)
2. [react.js](https://react.dev/)
3. [ChatGPT 3.5](https://chat.openai.com/) assisted

## 🚀 Usage

1. `cd animation-frameework`
2. `yarn dev` & go to localhost url to see it in action

## 📄 Other things

1. Cool CSS colours & their names [here](https://www.quackit.com/css/css_color_codes.cfm)
2. helpful: https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/
3. [helpful codepen](https://codepen.io/bot19/pen/VwVvRbq) from the article above (my fork, fixed an issue)
4. ChatGPT 3.5 assisted [demo](https://codesandbox.io/s/test-react-intersectional-observer-set-section-as-active-when-majority-in-vp-9lvnsv) of functionality required
