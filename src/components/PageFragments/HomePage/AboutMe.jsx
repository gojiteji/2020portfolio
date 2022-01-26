import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

const AboutMe = () => {
  return (
    <>
      <div>
        
        <h1 className="titleSeparate">About Me</h1>
        <p>
        Hello. Thank you for visiting this site. I am currently a fourth year universtiy student in Japan. My technical fields of interest are NLP and backend engineer. I mainly code in Python and Go. If you have any questions, please feel free to contact me via my e-mail.
        </p>
        
      </div>
      
    </>
  );
};
export default AboutMe;
