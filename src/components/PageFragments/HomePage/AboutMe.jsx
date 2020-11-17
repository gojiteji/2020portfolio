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
        Hello. Thank you for visiting this site. I am currently a third year universtiy student in Japan. My technical fields of interest are machine learning and backend engineer. I mainly code in Python and Go. If you have any questions, please feel free to contact me via the left contact button.
        </p>
        
      </div>
      
    </>
  );
};
export default AboutMe;
