import React, { Component } from 'react';
import GoMarkdown from 'react-icons/lib/go/markdown';
import marked from 'marked';
import {markdown} from 'content';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: markdown, height: '25rem' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(evt) {
    const markdown = evt.target.value,
          height = evt.target.scrollHeight;
    this.setState({
      markdown,
      height
    });
    this.props.handleInputChange(marked(evt.target.value));
  }

  componentDidMount() {
    this.props.handleInputChange(marked(markdown));
    const height = this.refs.md.scrollHeight;
    this.setState({
      markdown,
      height
    });
  }

  render() {
    return (
      <div>
        <label>
          <GoMarkdown className="icon" />
          <textarea ref='md' className="input"
            placeholder="Type Markdown here..."
            onChange={this.onInputChange}
            style={{height: this.state.height}}
            value={this.state.markdown}
          />
        </label>
      </div>
    );
  }
}


export default Input;
