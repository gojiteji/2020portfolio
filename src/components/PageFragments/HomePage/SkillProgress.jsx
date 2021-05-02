import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
<div>

    <h2>Education</h2>
    <Row gutter={[20, 20]}>
    <ul>
    <Row gutter={[10, 20]}><li><h3>Hokkaido University (Apr. 2020 - Mar. 2022(expected))</h3>
    School of Engineering Language Media Laboratory</li></Row>
    <br/>
    <Row gutter={[20, 20]}><li><h3>National Institute of Technology, Suzuka College (Apr. 2015 - Mar. 2020)</h3>
Department of Electronic and Information Engineering</li></Row>
</ul>
</Row>

    <h2>Favorite Languages</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={90}
          text="Python"
          
        />
        <ProgressBar
          percent={70}
          text="Go"
        />
        <ProgressBar
          percent={70}
          text="UnityC#"
        />
        <ProgressBar
          percent={75}
          text="Ichigojam Basic"
        />
        
        <ProgressBar
          percent={75}
          text="JavaScript(React)"
        />
      </Col>
    </Row>
    
  </div>
);

export default SkillsProgress;
