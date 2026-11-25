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
        Hello. Thank you for visiting this site. I am the CEO of mocomoco inc. I previously studied in the doctoral program at NAIST's NLP Lab in Japan. My technical fields of interest are NLP and web development. I mainly code in Python and Go. I also like to use HuggingFace and JAX. If you have any questions, please feel free to contact me via my e-mail.
        </p>
        
      </div>
      
    </>
  );
};
export default AboutMe;
