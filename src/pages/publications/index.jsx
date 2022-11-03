import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Helmet from "react-helmet"
import EventsTimeline from 'react-events-timeline';
import 'react-events-timeline/dist/main.css';




const pubdata = [
    
  {
   
},

];


const Experience = () => (
  <Layout className="outerPadding">
    <Layout className="container">

      <Header />
      <Helmet title="gojiteji | Experience" />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Experience</h1>
        </div>

        <EventsTimeline title='Publications' icon={ <i  className='fa fa-book '/>} color='#FFDC00' data={pubdata} />


  </SidebarWrapper>
    </Layout>
    <div className='bottomtxt'>
    <a className="bottomlink" href='https://privacypolicy.gojiteji.com/'>privacy policy</a>・Powered by <a className="bottomlink" href='https://github.com/rolwin100/rolwinreevan_gatsby_blog'>rolwinreevan gatsby blog theme</a> for Gatsby.
    </div>
  </Layout>
);

export default Experience;
