import React from 'react';
import {
 Popover, Affix, Layout, Row, Col,
} from 'antd';
//import FA from 'react-fontawesome';

import FeatherIcon from 'feather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const {
  facebook, github, linkedin,huggingface, twitter,sigmoid,
} = Config.social;

const content = (
  <div>
    <p>3DSFuuqBVUCwtXC8yi3jSKyVU6DZfhYzcA</p>
  </div>
);




const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          Koki
          {' '}
          <span>Tanaka</span>
        </h2>
        
      </div>
      
     
      
      <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="map-pin" /></span>
          {' '}
&nbsp;  Japan
        </li>
        <div className={`${style.boxName} centerAlign`}>

        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="globe" /></span>
          {' '}
&nbsp;  English/日本語
        </li>
        </div>
        <div className={`${style.boxName} centerAlign`}>

<li className={`${style.contactBlockItem}`}>
  <span><FeatherIcon size="19" icon="mail" /></span>
  {' '}
<a href="mailto:mail@gojiteji.com">&nbsp; mail@gojiteji.com</a>
</li>
</div>

      <div className="centerAlign box">
        <a href={twitter} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></a>
        <a href={github} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
        <a href={linkedin} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
        <a href={huggingface} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-duotone fa-face-smiling-hands" /></a>
        <a href={sigmoid} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-mastodon" /></a>
        <Popover content={content} title="My Bitcoin Address"><a label="button" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-btc" /></a></Popover>

      </div>
    </div>
  </aside>
);


const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
