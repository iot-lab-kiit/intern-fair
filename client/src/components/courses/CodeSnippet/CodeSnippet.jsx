"use client";

import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { FaCopy } from "react-icons/fa"; // Importing the copy icon
import Image from "next/image";
const CodeSnippet = ({ language, code }) => {
  const codeRef = useRef(null);
  const [copied, setcopied] = useState(false);

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [code]);

  const handleCopy = () => {
    const codeText = codeRef.current.innerText;
    navigator.clipboard.writeText(codeText).catch((err) => {
      console.error("Failed to copy: ", err);
    });
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 3000);
  };

  return (
    <div className="code-container text-[0.5rem] leading-3 mbXSmall:text-xs mbMedSmall:text-sm mbMedium:text-base tbPortrait:text-lg tbLandscape:text-xl">
      {copied ? (
        <span className=" absolute right-8 top-8 cursor-pointer ">
          <Image
            src="/icons/tick.png"
            alt="tick"
            layout="fixed"
            width={32}
            height={32}
            className="object-cover h-2 w-2 mbXSmall:w-2.5 mbXSmall:h-2.5 mbMedSmall:w-4 mbMedSmall:h-4 laptop:w-6 laptop:h-6 tbLandscape:w-8 tbLandscape:h-8"
          />
        </span>
      ) : (
        <button onClick={handleCopy} className="copy-button">
          <FaCopy className=" h-2 w-2 mbXSmall:w-2.5 mbXSmall:h-2.5 mbMedSmall:w-4 mbMedSmall:h-4 laptop:w-6 laptop:h-6 tbLandscape:w-8 tbLandscape:h-8" />
        </button>
      )}

      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
      <style jsx>{`
        .code-container {
          background-color: #24292e;
          padding: 1rem;
          border-radius: 10px;
          color: #c9d1d9;
          font-family: monospace;
          width: 100%;
          margin: 1rem auto;
          position: relative;
        }
        .tick-icon {
          position: absolute;
          top: 2rem;
          right: 2rem;
          width: 1.5rem;
          height: 1.5rem;
        }
        .copy-button {
          background-color: transparent;
          color: #c9d1d9;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          position: absolute;
          top: 2rem;
          right: 2rem;
        }
        .copy-button:hover {
          color: #444c56;
        }
      `}</style>
    </div>
  );
};

export default CodeSnippet;
