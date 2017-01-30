import React, { Component } from 'react';
import GoMarkdown from 'react-icons/lib/go/markdown';
import marked from 'marked';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: '', height: '25rem' };
    this.onInputChange = this.onInputChange.bind(this)
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


  render() {
    return (
      <div>
        <label>
          <GoMarkdown className="icon" />
          <textarea className="input"
            placeholder="Type Markdown here..."
            onChange={this.onInputChange}
            style={{height: this.state.height}}
          />
        </label>
      </div>
    );
  }
}


export default Input;
