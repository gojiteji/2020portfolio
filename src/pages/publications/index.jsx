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
  <div>
    <h2>Experiences</h2>
  <EventsTimeline color='#FFDC00' data={pubdata} />
  </div>
);

export default Experience;
