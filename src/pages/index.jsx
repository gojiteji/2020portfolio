import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Experience from '../pages/experience';
import Skills from '../components/PageFragments/HomePage/SkillProgress';

import Helmet from "react-helmet"

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <Helmet title="gojiteji | About" />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills/>
          <Experience />
        </>
      </SidebarWrapper>
    </Layout>
    <div className='bottomtxt'>
    <a className="bottomlink" href='https://privacypolicy.gojiteji.com/'>privacy policy</a>・Powered by <a className="bottomlink" href='https://github.com/rolwin100/rolwinreevan_gatsby_blog'>rolwinreevan gatsby blog theme</a> for Gatsby.
    </div>
  </Layout>
);
