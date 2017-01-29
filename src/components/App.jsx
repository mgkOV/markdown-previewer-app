import React from 'react';

import Input from 'Input';
import Output from 'Output';

export default (props) => {
  return (
    <div className="app row">
      <h1>Markdown Previewer</h1>
      <div className="large-6 columns"><Input /></div>
      <div className="large-6 columns"><Output /></div>
    </div>
  );
}
