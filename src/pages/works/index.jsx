import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import AboutTile from '../../components/AbouTile';



const Works = () => (
  <Layout className="outerPadding">
    <Layout className="container">

      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Works</h1>
        </div>


        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="3.png"
            alt="COCONOMASK"
            textH4="COcoa NOtitfication MASK"
            textH3="COCONOMASK"
            link="https://github.com/jphacks/A_2111"
          />
        </Col>


      <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="0.png"
            alt="PROG.CAFÉ"
            textH4="Virtual Co-working Space"
            textH3="PROG.CAFÉ"
            link="https://blog.gojiteji.com/2020/09/26/r-intern/"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="1.png"
            alt="ここで一句"
            textH4="AR Haiku App"
            textH3="ここで一句"
            link="https://blog.gojiteji.com/2021/02/19/unitygps/"
          />
        </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="arcana.png"
            alt="arcana"
            textH4="Let's manage the fluid level!"
            textH3="arcana"
            link="https://blog.gojiteji.com/2020/11/28/jphacks2020/"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="game.png"
            alt="ひとあつめ"
            textH4="A two-player game that can be played in a web browser"
            textH3="ひとあつめ"
            link="https://blog.gojiteji.com/2020/05/17/coding-cbrowser-game2/"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="mothman.png"
            alt="Mothman"
            textH4="A web application that can stream and archive presentations."
            textH3="Mothman"
            width='250'
            link='https://hackmd.io/@gojiteji/H1WG6E0xS'
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="NOTELOOK.png"
            alt="NOTELOOK"
            textH4="This device allows you to write directly on each other's paper notes."
            textH3="NOTELOOK"
            link='https://hackmd.io/@gojiteji/B1zOCN0eH'
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="FinePay.png"
            alt="FinePay"
            textH4="A virtual money management system for kids."
            textH3="FinePay"
            link='https://protopedia.net/prototype/8c01a75941549a705cf7275e41b21f0d'

          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="gacha.png"
            alt="高専祭バザーガチャ"
            textH4="Calculate the menu for the school festival from your budget."
            textH3="高専祭バザーガチャ"
            link='https://eq.gojiteji.com'
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="kaimin.png"
            alt="kaimin"
            textH4="This app finds other users who have similar habits to revise your lifestyle."
            textH3="kaimin"
            link='https://hackmd.io/@gojiteji/By9t8xcl8'
          />
        </Col>
      </Row>
      </SidebarWrapper>
    </Layout>
    <div className='bottomtxt'>
    <a className="bottomlink" href='https://privacypolicy.gojiteji.com/'>privacy policy</a>・Powered by <a className="bottomlink" href='https://github.com/rolwin100/rolwinreevan_gatsby_blog'>rolwinreevan gatsby blog theme</a> for Gatsby.
    </div>
  </Layout>
);

export default Works;
