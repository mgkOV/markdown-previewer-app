import React, { Component } from 'react';
import GoMarkdown from 'react-icons/lib/go/markdown';
import marked from 'marked';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: '' };
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(evt) {
    this.setState({
      markdown: evt.target.value
    });
    this.props.handleInputChange(marked(evt.target.value));
  }


  render() {
    return (
      <div>
        <label>
          <GoMarkdown className="icon" />
          <textarea className="input"
            placeholder="Type Markdown here..."
            onChange={this.onInputChange}
          />
        </label>
      </div>
    );
  }
}


export default Input;
