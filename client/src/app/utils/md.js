import React, { useEffect, useRef } from "react";
import markdownit from "markdown-it";
import doMarkdownit from "@digitalocean/do-markdownit";
import hljs from "highlight.js";
import Clipboard from "clipboard";
import "highlight.js/styles/color-brewer.css";
import { Toaster, toast } from "react-hot-toast";

import "./style.css";

const md = markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const highlightedCode = hljs.highlight(str, {
          language: lang,
          ignoreIllegals: true,
        }).value;
        return (
          `<pre class="hljs"><code>${highlightedCode}</code><button class="copy-button">Copy</button></pre>`
        );
      } catch (__) {}
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(
      str
    )}</code><button class="copy-button">Copy</button></pre>`;
  },
}).use(doMarkdownit, {});

const MarkdownRenderer = ({ content }) => {

  useEffect(() => {
    const clipboard = new Clipboard(".copy-button", {
      text: function (trigger) {
        return trigger.previousElementSibling.textContent.trim(); 
      },
    });

    clipboard.on("success", function (e) {
      toast.success("Copied!");
      e.clearSelection();
    });

    clipboard.on("error", function (e) {
      toast.error("Failed to copy!");
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Toaster />
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  );
};

export default MarkdownRenderer;
