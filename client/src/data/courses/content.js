const content = {
  title: "Cascading Style Sheets(CSS)",
  data: [
    {
      id: "1",
      name: "What is CSS?",
      language: "css",
      MD: "",
      snippet: false,
      description:
        "CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation and formatting of HTML (Hypertext Markup Language) and XML (Extensible Markup Language) documents, including elements such as fonts, colors, layout, and spacing. CSS allows web developers and designers to control the appearance of web pages by specifying how HTML elements should be displayed on the screen, printed, or spoken. With CSS, designers can define styles once and apply them to multiple elements across a website, making it easier to maintain consistency and update the visual appearance of a site.",
    },
    {
      id: "2",
      name: "Basic CSS format",
      language: "css",
      MD: `body {
        background-color: #f3f3f3;
        font-family: Arial, sans-serif;
      }`,
      snippet: true,
      description:
        "CSS, or Cascading Style Sheets, is a fundamental technology used in web development to control the presentation and formatting of HTML and XML documents. At its core, CSS consists of selectors, properties, and values. Selectors are patterns that target HTML elements, allowing developers to apply styles selectively. Properties are the styling attributes, such as color, font-size, or margin, while values specify how those properties should be styled, such as red color or 16 pixels font-size.",
    },
    {
      id: "3",
      name: "Text Align Property",
      language: "css",
      MD: `p {
        text-align: center;
    }`,
      snippet: true,
      description:
        "The text-align property specifies the horizontal alignment of text content within an element.",
    },
    {
      id: "4",
      name: "Cascading and Specificity",
      language: "css",
      MD: "",
      snippet: false,
      description:
        "CSS follows a set of rules to determine which styles apply to an element when multiple conflicting styles exist. This process is known as cascading and specificity.",
    },
  ],
};

export default content;
