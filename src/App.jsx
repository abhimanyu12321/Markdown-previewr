import React from "react";
import { useState } from "react";
import Markdown from "react-markdown";
import "./App.css";

function App() {
  const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

  const [text, settext] = useState(defaultMarkdown);
  const [editorFlag, seteditorFlag] = useState(false);
  const [previewerFlag, setpreviewerFlag] = useState(false);

  function editorToggle() {
    seteditorFlag(!editorFlag);
  }
  function previewToggle() {
    setpreviewerFlag(!previewerFlag);
  }

  return (
    <div className="wrapper">
      <div
        className="editorWrap"
        style={{
          width: editorFlag ? "80vw" : "45vw",
          display: previewerFlag ? "none" : "block",
        }}
      >
        <div className="toolbar">
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
          Editor
          {!editorFlag && (
            <i className="fa fa-arrows-alt" onClick={editorToggle}></i>
          )}
          {editorFlag && (
            <i className="fa fa-compress" onClick={editorToggle}></i>
          )}
        </div>
        <textarea
          id="editor"
          type="text"
          onChange={(e) => settext(e.target.value)}
          value={text}
          style={{ height: editorFlag ? "100vh" : "" }}
        ></textarea>
      </div>
      <div className="converter"></div>
      <div
        className="previewWrap"
        style={{
          display: editorFlag ? "none" : "block",
          minHeight: previewerFlag ? "100vh" : "200px",
          width: previewerFlag ? "80vw" : "70vw",
          position: previewerFlag ? "relative" : "static",
          top: previewerFlag ? "2rem" : "",
        }}
      >
        <div className="toolbar">
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
          Previewer
          {!previewerFlag && (
            <i className="fa fa-arrows-alt" onClick={previewToggle}></i>
          )}
          {previewerFlag && (
            <i className="fa fa-compress" onClick={previewToggle}></i>
          )}
        </div>
        <div id="preview">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default App;
