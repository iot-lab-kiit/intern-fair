"use client";

import {useEffect, useRef} from "react";
import Head from "next/head";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import {FaCopy} from "react-icons/fa"; // Importing the copy icon

export default function Home() {
    const codeRefs = {
        javascript: useRef(null),
        html: useRef(null),
        css: useRef(null),
        jsx: useRef(null),
        python: useRef(null),
    };

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const handleCopy = (language) => {
        const code = codeRefs[language].current.innerText;
        navigator.clipboard.writeText(code).catch((err) => {
            console.error("Failed to copy: ", err);
        });
    };

    const codeSnippets = {
        javascript: `var message = "Hello, world!";
console.log(message);`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, world!</h1>
</body>
</html>`,
        css: `body {
    background-color: #24292e;
    color: #c9d1d9;
    font-family: Arial, sans-serif;
}`,
        jsx: `import React from 'react';

const App = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
        </div>
    );
};

export default App;`,
        python: `def greet():
    message = "Hello, world!"
    print(message)

greet()`,
    };

    return (
        <div>
            <Head>
                <title>Code Snippet with Highlighting (GitHub Theme)</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <h1>Code Snippet with Highlighting</h1>
            {Object.keys(codeSnippets).map((language) => (
                <div key={language} className="code-container">
                    <button onClick={() => handleCopy(language)} className="copy-button">
                        <FaCopy />
                    </button>
                    <pre>
                        <code ref={codeRefs[language]} className={`language-${language}`}>
                            {codeSnippets[language]}
                        </code>
                    </pre>
                </div>
            ))}
            <style jsx>{`
                .code-container {
                    background-color: #24292e;
                    padding: 1rem;
                    border-radius: 5px;
                    color: #c9d1d9;
                    font-family: monospace;
                    width: 60%;
                    margin: 1rem auto;
                    position: relative;
                }
                .copy-button {
                    background-color: transparent;
                    color: #c9d1d9;
                    border: none;
                    cursor: pointer;
                    font-size: 1.2rem;
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                }
                .copy-button:hover {
                    color: #444c56;
                }
            `}</style>
        </div>
    );
}
