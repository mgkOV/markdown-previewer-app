import React from 'react';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaVk from 'react-icons/lib/fa/vk';


export default () => {
  return(
    <footer>
      <div className="footer">
        <p>Created by mgkOV</p>
        <a href="https://github.com/mgkOV" target="_blank">
          <FaGithubSquare className="footer-icon"/>
        </a>
        <a href="https://www.facebook.com/mgkov" target="_blank">
          <FaFacebookSquare className="footer-icon"/>
        </a>
        <a href="https://vk.com/id4344131" target="_blank">
          <FaVk className="footer-icon"/>
        </a>
      </div>
    </footer>
  );
}
