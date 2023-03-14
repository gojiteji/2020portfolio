import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Helmet from "react-helmet"
import EventsTimeline from 'react-events-timeline';
import 'react-events-timeline/dist/main.css';




const pubdata = [
    
  {
    date: "2023/3",
    title: '田中康紀, 須藤克仁, 中村哲. "ByT5 の Attention を用いたトークン結合" 言語処理学会 第29回年次大会 p800-p804, ポスター発表',
    label: '',
    location: '沖縄',
    content: (<div>null</div>),
  },

];


const Publications = () => (
  <div>
    <h1>  </h1>
    <h1>  </h1>
    <h1>  </h1>

    <h2>Publications</h2>
  <EventsTimeline color='#FFDC00' data={pubdata} />
  </div>
);

export default Publications;
