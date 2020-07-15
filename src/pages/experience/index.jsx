import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';

import EventsTimeline from 'react-events-timeline';
import 'react-events-timeline/dist/main.css';


const interndata = [

  {
    date: "2020",
    title: 'CyberAgent 2days サーバーサイド向け開発型インターンシップ',
    label: '',
    location: '2020/6/6-7',
    content: (<div></div>),
},

  {
    date: "2019",
    title: '日経新聞社　短期インターンシップ(大阪)',
    label: '',
    location: '2019/8/23-25',
    content: (<div></div>),
},

{
  date: "2018",
  title: 'NEO JAPAN　インターンシップ',
  label: '',
  location: '2018/9/3-9/7',
  content: (<div></div>),
},

];




const awarddata = [
  {
      date: "2019",
      title: '平成30年度 起業家甲子園 jig.jp賞　さくらインターネット賞',
      label: '',
      location: '2019/3/11',
      content: (<div>Product:Mothman</div>),
  },
  {
    date: "2018",
    title: '第29回全国高等専門学校プログラミングコンテスト自由部門 特別賞・NICT賞',
    label: '',
    location: '2018/10/27-28',
    content: (<div>Product:Mothman</div>),
},
{
  date: "2017",
  title: 'パソコン甲子園2017　モバイル部門　グランプリ受賞',
  label: '',
  location: '2017/11/3-4',
  content: (<div>Product:NOTELOOK</div>),
},
{
  date: "2016",
  title: '第1回docomo近未来学生アイデアコンテスト　敢闘賞',
  label: '',
  location: '2016/2/27',
  content: (<div>Product:おらわらお</div>),
},
];


const Experience = () => (
  <Layout className="outerPadding">
    <Layout className="container">

      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Experience</h1>
        </div>

        <EventsTimeline title='Internship' icon={ <i className='fa fa-code'/>} color='' data={interndata} />
        <br/><br/><br/>
        <EventsTimeline title='Awards' icon={ <i  className='fa fa-trophy '/>} color='#FFDC00' data={awarddata} />


  </SidebarWrapper>
    </Layout>
    <div className='bottomtxt'>
    <a className="bottomlink" href='https://privacypolicy.gojiteji.com/'>privacy policy</a>・Powered by <a className="bottomlink" href='https://github.com/rolwin100/rolwinreevan_gatsby_blog'>rolwinreevan gatsby blog theme</a> for Gatsby.
    </div>
  </Layout>
);

export default Experience;
