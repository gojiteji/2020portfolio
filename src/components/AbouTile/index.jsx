import React from 'react';
import style from './about.module.less';

const AboutTile = (props) => {
  const {
    img, textH4, textH3, alt, height, width,link
  } = props;
  return (
    <div className={style.aboutTile}>
      <div className={style.aboutBlock}>
        <img
          src={`../${img}`}
          height={height || 110}
          width={width || 160}
          alt={alt || ''}
        />
      </div>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h3>{ textH3 || ''}</h3>
        <h4>{textH4 || '' }</h4>
        <a href={link || '' }>View This Project</a>
      </div>
    </div>
  );
};

export default AboutTile;
