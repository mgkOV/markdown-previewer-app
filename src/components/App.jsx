import React from 'react';

import Input from 'Input';
import Output from 'Output';
import GitHubLink from 'GitHubLink';
import Footer from 'Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { html: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(html) {
    this.setState({
      html
    });
  }
  render() {
    return (
      <div>
        <div className="app row">
          <GitHubLink />
          <h1 className="title">Markdown Previewer</h1>
          <div className="large-6 columns"><Input handleInputChange={this.handleInputChange}/></div>
          <div className="large-6 columns"><Output html={this.state.html}/></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
