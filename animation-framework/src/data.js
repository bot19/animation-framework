/**
 * would be better with TS, but need this ASAP
 * (1) 1st section works slightly diff to other sections, explained indepth incomponent; need this so nav content can be seen above below elements clearly
 * ie: 1st section has a bg header element
 * it's important that the sections are in order of their rendered position from page top to bottom
 */
export const PAGE_DATA = {
  sections: [
    {
      meta: {
        id: "section-1",
        position: 1,
        name: "section 1 hero HotPink", // name of section
        navBackground: true, // true to show nav BG appropriate to section (1)
        background: "HotPink", // name of CSS colour
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
        navBackground: true,
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
        name: "section 3 Gold",
        navBackground: true,
        background: "Gold",
        footer: true,
      },
      content: {
        heading: "",
        text: "Tiny section 1 of 2; has nothing but this singular short paragraph.",
        image: "",
      },
    },
    {
      meta: {
        id: "section-4",
        position: 4,
        name: "section 4 MediumSpringGreen",
        navBackground: true,
        background: "MediumSpringGreen",
        footer: true,
      },
      content: {
        heading: "",
        text: "Tiny section 2 of 2; has nothing but this singular short paragraph.",
        image: "",
      },
    },
    {
      meta: {
        id: "section-5",
        position: 5,
        name: "section 5 Aqua",
        navBackground: true,
        background: "Aqua",
        footer: true,
      },
      content: {
        heading: "A really long section that exceeds VP many times",
        text: "Quia sit ut porro vel exercitationem id impedit voluptatem. Voluptate quae cum reprehenderit quibusdam reiciendis nobis est amet. Ut impedit quia aut ut nam et. In fugit ipsa est amet recusandae laudantium fugit iste. Est aperiam sint sint expedita et beatae est cupiditate. Dignissimos reiciendis consequatur dicta quo. Facilis nesciunt sit eum voluptas eum ipsam. Quia sed rerum omnis libero pariatur numquam. Quia beatae esse dolore omnis. Sit sed dicta autem doloribus est sed explicabo odit. Non nemo eaque eius. Ea porro tempora non distinctio dolor adipisci ipsam. Laboriosam dolores quo in rerum. Dolorem odit corporis ut magnam quisquam. Illo excepturi quis sed cupiditate alias velit. Qui doloremque perspiciatis ut ex est natus dolor. Facere sint nulla consequuntur. Quos facere dolor fugiat quam nostrum enim nostrum. Voluptatem et assumenda et. Nihil eum hic dolorum modi illo debitis eius. Quod qui vel aliquid quos provident ab quidem eius. Magnam fugit eos accusantium accusantium. Quidem at doloribus repudiandae nemo quae nostrum quibusdam sed. Iure eos natus accusantium placeat vitae quia doloribus nihil. Atque quia quia vel cupiditate. Iste omnis voluptates consequatur aut eveniet sapiente dolore. Vel sunt ut aperiam libero error accusantium saepe rem. Qui velit tenetur soluta blanditiis nisi ad. Voluptatum ipsa tempora aut ex omnis officia architecto. Autem rerum officiis aut libero velit doloremque. Saepe est magni consequatur ut dolores et. Quia quod voluptas tenetur. Et aperiam delectus sequi qui fugit. Dignissimos quia sint odio laudantium esse. Vero corrupti assumenda amet non aut eos quibusdam. Aliquid ratione ut minus quasi omnis et. Praesentium inventore recusandae magni et voluptatem omnis qui recusandae. Cumque voluptas aut neque deleniti recusandae laboriosam dolor natus. Fugiat eos qui cupiditate unde nisi. Eos rerum quasi natus sapiente dolor. Est eum ut minima. Porro minus magnam deleniti labore. Voluptates odit et vitae et quia iste hic expedita. Quis eum est doloremque culpa in alias iusto voluptas. Aut odio ullam ad qui. Impedit labore qui est est et et fugit molestias. Asperiores modi doloremque ex ratione. Quia sit ut porro vel exercitationem id impedit voluptatem. Voluptate quae cum reprehenderit quibusdam reiciendis nobis est amet. Ut impedit quia aut ut nam et. In fugit ipsa est amet recusandae laudantium fugit iste. Est aperiam sint sint expedita et beatae est cupiditate. Dignissimos reiciendis consequatur dicta quo. Facilis nesciunt sit eum voluptas eum ipsam. Quia sed rerum omnis libero pariatur numquam. Quia beatae esse dolore omnis. Sit sed dicta autem doloribus est sed explicabo odit. Non nemo eaque eius. Ea porro tempora non distinctio dolor adipisci ipsam. Laboriosam dolores quo in rerum. Dolorem odit corporis ut magnam quisquam. Illo excepturi quis sed cupiditate alias velit. Qui doloremque perspiciatis ut ex est natus dolor. Facere sint nulla consequuntur. Quos facere dolor fugiat quam nostrum enim nostrum. Voluptatem et assumenda et. Nihil eum hic dolorum modi illo debitis eius. Quod qui vel aliquid quos provident ab quidem eius. Magnam fugit eos accusantium accusantium. Quidem at doloribus repudiandae nemo quae nostrum quibusdam sed. Iure eos natus accusantium placeat vitae quia doloribus nihil. Atque quia quia vel cupiditate. Iste omnis voluptates consequatur aut eveniet sapiente dolore. Vel sunt ut aperiam libero error accusantium saepe rem. Qui velit tenetur soluta blanditiis nisi ad. Voluptatum ipsa tempora aut ex omnis officia architecto. Autem rerum officiis aut libero velit doloremque. Saepe est magni consequatur ut dolores et. Quia quod voluptas tenetur. Et aperiam delectus sequi qui fugit. Dignissimos quia sint odio laudantium esse. Vero corrupti assumenda amet non aut eos quibusdam. Aliquid ratione ut minus quasi omnis et. Praesentium inventore recusandae magni et voluptatem omnis qui recusandae. Cumque voluptas aut neque deleniti recusandae laboriosam dolor natus. Fugiat eos qui cupiditate unde nisi. Eos rerum quasi natus sapiente dolor. Est eum ut minima. Porro minus magnam deleniti labore. Voluptates odit et vitae et quia iste hic expedita. Quis eum est doloremque culpa in alias iusto voluptas. Aut odio ullam ad qui.",
        image: "",
      },
    },
    {
      meta: {
        id: "section-6",
        position: 6,
        name: "section 6 MediumOrchid",
        navBackground: true,
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
        id: "section-7",
        position: 7,
        name: "section 7 DeepSkyBlue",
        navBackground: false,
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
