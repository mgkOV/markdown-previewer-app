import React from 'react';
import TextFields from 'react-icons/lib/md/text-fields';

export default ({html}) => {
  return (
    <div>
      <TextFields className="icon"/>
      <div className="output" dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  );
}
