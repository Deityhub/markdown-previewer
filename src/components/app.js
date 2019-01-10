import React from "react";
import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/github.css";
import Editor from "./editor";
import Preview from "./preview";
import "./app.scss";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

yarn add babel

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return highlight.highlightAuto(code).value;
  },
  breaks: true,
  smartLists: true,
  smartypants: true,
  xhtml: true
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: placeholder
    };
  }

  handleChange = e => {
    this.setState({
      markdown: e.target.value
    });
  };

  showPreview = () => {
    let { markdown } = this.state;

    return {
      __html: marked(markdown)
    };
  };

  render() {
    let { markdown } = this.state;

    return (
      <div className="markdown-container">
        <Editor handleChange={this.handleChange} value={markdown} />
        <Preview render={this.showPreview} />
      </div>
    );
  }
}

export default App;
