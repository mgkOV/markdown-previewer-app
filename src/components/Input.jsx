import React, { Component } from 'react';
import GoMarkdown from 'react-icons/lib/go/markdown';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange() {
    this.setState({
      term: 'a'
    })
  }

  render() {
    return (
      <div>
        <label>
          <GoMarkdown className="icon" />
          <textarea className="input" placeholder="Type Markdown here..."></textarea>
        </label>
      </div>
    );
  }
}


export default Input;
