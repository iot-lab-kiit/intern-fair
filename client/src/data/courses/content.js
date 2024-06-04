const content = {
  id: "5c79df97-8074-42f6-97cf-6113e06934ad",
  name: "Cascading Style Sheets (CSS)",
  subSubTopicID: [
    {
      id: "c3aa5cdd-c726-4ef1-9ef3-049eaf7238bb",
      subTitle: "Introduction to CSS",
      content:
        "CSS, or Cascading Style Sheets, is a language used for describing the presentation of a document written in HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS saves a lot of work by controlling the layout of multiple web pages all at once. It can control the layout of multiple web pages simultaneously. External stylesheets are stored in CSS files. CSS has various levels, including CSS1, CSS2, and CSS3, each building on the last and introducing new features and capabilities.",
      code_snippet: `/* Basic CSS Example */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    color: #333;
}
`,
      code_language: "css",
      images: [
        "https://images.velog.io/images/dhlee91/post/e1224437-ef46-4c73-83ec-3fb43786a187/css_img.png",
        "https://images.velog.io/images/dhlee91/post/e1224437-ef46-4c73-83ec-3fb43786a187/css_img.png",
      ],
    },
    {
      id: "ec15dca8-80e9-4ebb-9cd1-b3da37d2eb01",
      subTitle: "Anchor Tags",
      content:
        "Anchor tags in HTML are used to create hyperlinks, which are crucial for navigating from one page to another on the web. In CSS, the 'a' selector is used to style these links. You can change various properties of anchor tags such as color, text decoration, font-weight, and more. Pseudo-classes like ':hover', ':active', and ':visited' allow you to define styles for different states of an anchor tag, enhancing the user experience by providing visual feedback.",
      code_snippet: `/* Styling anchor tags */
a {
    color: blue;
    text-decoration: none;
    font-weight: bold;
}

/* Change color when hovered */
a:hover {
    color: darkblue;
    text-decoration: underline;
}

/* Change color when active */
a:active {
    color: red;
}

/* Change color for visited links */
a:visited {
    color: purple;
}`,
      code_language: "css",
      images: [
        "https://s1.o7planning.com/web-rs/web-image/en/arf-1155628-vi.gif",
      ],
      videos: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      ],
    },
    {
      id: "d4e3f6g7-h8i9-0j1k-2l3m-4n5o6p7q8r9s",
      subTitle: "Selectors",
      content:
        "CSS selectors are patterns used to select the elements you want to style. The most common selectors are element selectors, class selectors, and ID selectors. Element selectors target HTML elements directly. Class selectors target elements with a specific class attribute, allowing you to apply the same styles to multiple elements. ID selectors target a single, unique element. Advanced selectors include attribute selectors, pseudo-class selectors, and pseudo-element selectors, which provide greater specificity and control over your styles.",
      code_snippet: `/* Element selector */
p {
    color: blue;
}

/* Class selector */
.class-selector {
    color: red;
    background-color: yellow;
    border: 1px solid black;
    padding: 10px;
}

/* ID selector */
#id-selector {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
}

/* Attribute selector */
input[type="text"] {
    border: 2px solid #ccc;
    padding: 10px;
}

/* Pseudo-class selector */
a:hover {
    color: green;
}

/* Pseudo-element selector */
p::first-line {
    font-weight: bold;
    text-transform: uppercase;
}

/* Complex selector example */
div.article p.intro {
    font-size: 18px;
    color: gray;
}

/* Descendant selector */
div p {
    margin: 10px 0;
}

/* Child selector */
ul > li {
    list-style: none;
    padding: 5px;
}`,
      code_language: "css",
      images: [
        "https://www.atatus.com/blog/content/images/size/w960/2023/01/css-selectors-1.png",
      ],
      // videos: ["http://example.com/selectors_video.mp4"],
    },
    {
      id: "t1u2v3w4-x5y6-7z8a-9b0c-d1e2f3g4h5i6",
      subTitle: "Box Model",
      content:
        "The CSS box model describes the rectangular boxes generated for elements in the document tree and consists of four areas: the content area, padding area, border area, and margin area. Understanding the box model is essential for controlling the layout and design of web pages. The content area is the actual content of the element. Padding is the space between the content and the border. The border surrounds the padding (if any) and content. The margin is the space outside the border, separating the element from other elements.",
      code_snippet: `/* Box model example */
div {
    width: 300px;
    height: 150px;
    margin: 20px;
    padding: 15px;
    border: 2px solid black;
    background-color: #e0e0e0;
}

/* Content area */
div.content {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px;
}

/* Padding example */
div.padding {
    padding: 20px;
    background-color: lightblue;
}

/* Border example */
div.border {
    border: 5px dashed red;
    background-color: lightgreen;
}

/* Margin example */
div.margin {
    margin: 30px;
    background-color: lightcoral;
}

/* Full box model example */
div.box-model {
    width: 200px;
    height: 100px;
    margin: 10px;
    padding: 10px;
    border: 2px solid blue;
    background-color: yellow;
}`,
      code_language: "css",
      images: [
        "https://miro.medium.com/v2/resize:fit:408/1*sKnLrT1TtqWDZg7GWoBCow.png",
      ],
      // videos: ["http://example.com/box_model_video.mp4"],
    },
    {
      id: "j7k8l9m0-n1o2-p3q4-r5s6-t7u8v9w0x1y2",
      subTitle: "Flexbox",
      content:
        "Flexbox, or the Flexible Box Layout Module, is a CSS layout model designed to distribute space along a single column or row. Flexbox makes it easier to design flexible and responsive layout structures without using float or positioning. Flexbox container properties include display, flex-direction, justify-content, align-items, and align-content. Flexbox item properties include order, flex-grow, flex-shrink, and align-self. These properties allow for more efficient layout designs and adaptations to different screen sizes.",
      code_snippet: `/* Flexbox container */
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #ccc;
    padding: 10px;
}

/* Flex items */
.item {
    background-color: lightgrey;
    padding: 20px;
    margin: 5px;
    border: 1px solid black;
}

/* Flex direction column */
.container-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    height: 300px;
}

/* Align items center */
.container-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

/* Order property */
.item:nth-child(1) {
    order: 2;
}
.item:nth-child(2) {
    order: 1;
}

/* Flex grow property */
.item-grow {
    flex-grow: 2;
}

.item-no-grow {
    flex-grow: 0;
}`,
      code_language: "css",
      images: [
        "https://media.geeksforgeeks.org/wp-content/uploads/20210906220644/Architecture.png",
      ],
      //   videos: ["http://example.com/flexbox_video.mp4"],
    },
    {
      id: "a3b4c5d6-e7f8-g9h0-i1j2-k3l4m5n6o7p8",
      subTitle: "Grid Layout",
      content:
        "CSS Grid Layout is a powerful 2-dimensional layout system that provides a way to layout items in rows and columns. CSS Grid allows you to create complex layouts easily. The main properties include grid-template-columns, grid-template-rows, grid-template-areas, grid-gap, justify-items, and align-items. These properties define the structure and placement of grid items within the grid container. Grid items can be positioned anywhere in the grid using line numbers, names, or areas.",
      code_snippet: `/* Grid container */
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
    padding: 20px;
}

/* Grid items */
.item {
    background-color: lightblue;
    padding: 20px;
    border: 1px solid black;
}

/* Define specific item positions */
.item1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}

.item2 {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
}`,
      code_language: "css",
      images: [
        "https://www.freecodecamp.org/news/content/images/2022/05/CSS-GRID-3.png",
      ],
      // videos: ["http://example.com/grid_layout_video.mp4"],
    },
    {
      id: "q8r9s0t1-u2v3-w4x5-y6z7-a1b2c3d4e5f6",
      subTitle: "Responsive Design",
      content:
        "Responsive design ensures that web pages look good on all devices by using flexible layouts, grids, and media queries. Media queries are a key component of responsive design, allowing you to apply different styles based on the device's characteristics such as width, height, orientation, and resolution. Flexbox and Grid are also integral to creating responsive layouts. By combining these techniques, you can build web pages that provide a great user experience on desktops, tablets, and mobile devices.",
      code_snippet: `/* Basic responsive design */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Container with max-width */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Responsive grid layout */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
}

/* Media query for mobile devices */
@media (max-width: 600px) {
    body {
        font-size: 14px;
    }

    .container {
        padding: 10px;
    }
}

/* Media query for tablets */
@media (min-width: 601px) and (max-width: 1024px) {
    body {
        font-size: 16px;
    }

    .container {
        padding: 15px;
    }
}

/* Media query for desktops */
@media (min-width: 1025px) {
    body {
        font-size: 18px;
    }

    .container {
        padding: 20px;
    }
}

/* Responsive navigation menu */
nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    padding: 0;
}`,
      code_language: "css",
      images: [
        "https://kinsta.com/wp-content/uploads/2020/08/media-queries.png",
      ],
      // videos: ["http://example.com/responsive_design_video.mp4"],
    },
    {
      id: "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
      subTitle: "Animations",
      content:
        "CSS animations allow you to animate the transitions from one CSS style configuration to another. Animations consist of two main components: keyframes and animation properties. Keyframes define the start and end states of the animation, as well as intermediate waypoints. Animation properties such as animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, and animation-direction control the behavior of the animation. Using these properties, you can create complex animations that enhance the user experience.",
      code_snippet: `/* Keyframes for animation */
@keyframes example {
    0% {
        background-color: red;
        transform: translateX(0);
    }
    50% {
        background-color: yellow;
        transform: translateX(100px);
    }
    100% {
        background-color: green;
        transform: translateX(0);
    }
}

/* Applying animation to an element */
.animated-box {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

/* Additional animation example */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-in-element {
    animation-name: fadeIn;
    animation-duration: 2s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
}

/* Example of multiple animations */
@keyframes scaleUp {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.5);
    }
}

.multi-animate {
    animation: fadeIn 2s ease-in, scaleUp 3s ease-out 1s;
}`,
      code_language: "css",
      images: [
        "https://blog.hubspot.com/hs-fs/hubfs/Copy%20of%20CSS%20transition%20vs%20animation-1.png?width=650&name=Copy%20of%20CSS%20transition%20vs%20animation-1.png",
      ],
      // videos: ["http://example.com/animations_video.mp4"],
    },
    {
      id: "w3x4y5z6-a1b2-c3d4-e5f6-g7h8i9j0k1l2",
      subTitle: "Pseudo-classes and Pseudo-elements",
      content:
        "Pseudo-classes and pseudo-elements allow you to style elements based on their state or position in the document tree. Pseudo-classes, such as :hover, :focus, :nth-child(), and :not(), target elements in specific states. Pseudo-elements, like ::before, ::after, ::first-line, and ::first-letter, allow you to style specific parts of an element's content. These powerful tools enable more precise and dynamic styling without needing additional markup.",
      code_snippet: `/* Pseudo-classes */
a:hover {
    color: red;
}

input:focus {
    border-color: blue;
}

p:nth-child(2n) {
    background-color: #f0f0f0;
}

button:not(:disabled) {
    background-color: green;
}

/* Pseudo-elements */
p::first-line {
    font-weight: bold;
    text-transform: uppercase;
}
`,
      code_language: "css",
      images: [
        "https://w3reign.com/wp-content/uploads/2017/03/pseudo-class.jpg",
      ],
      // videos: ["http://example.com/pseudo_classes_video.mp4"],
    },
    {
      id: "m3n4o5p6-q7r8-s9t0-u1v2-w3x4y5z6a1b2",
      subTitle: "Transitions",
      content:
        "CSS transitions allow you to change property values smoothly over a given duration. Transitions enhance the user experience by providing visual feedback when elements change state, such as when they are hovered over, focused on, or clicked. The transition property is used to define which properties will change, the duration of the transition, the timing function, and any delay before the transition starts. By combining different transitions, you can create smooth and engaging animations.",
      code_snippet: `/* Basic transition */
div {
    width: 100px;
    height: 100px;
    background-color: red;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

div:hover {
    width: 200px;
    height: 200px;
    background-color: blue;
    transform: rotate(45deg);
}

/* Transition with different timing functions */
.button {
    padding: 10px 20px;
    background-color: green;
    color: white;
    border: none;
    transition: background-color 0.5s ease-in-out, transform 0.5s ease-in;
}

.button:hover {
    background-color: darkgreen;
    transform: scale(1.1);
}
/* Multiple transitions */
.card {
    width: 150px;
    padding: 20px;
    border: 1px solid #ccc;
    transition: box-shadow 0.3s, transform 0.3s;
}

.card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transform: translateY(-10px);
}`,
      code_language: "css",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHt92DUqW6pRXW5ciQ6zLNVg_dGrLDL5uSUg&s",
      ],
      // videos: ["http://example.com/transitions_video.mp4"],
    },
  ],
};

export default content;
