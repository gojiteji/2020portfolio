import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Helmet from "react-helmet"
import EventsTimeline from 'react-events-timeline';
import 'react-events-timeline/dist/main.css';




const pubdata = [
  {
    date: "2026",
    title: '渋木英潔, 田中康紀, 阪本浩太郎. 「ローカルLLMを用いた音声診療対話からの自動要約による電子カルテ作成支援」',
    label: '',
    location: '2026/11',
    content: (
      <div>
        第46回医療情報学連合大会（第27回日本医療情報学会学術大会）, ハイパーデモ, 3-PA-3-03.
        {' '}<a href="https://www.jcmi46.org/program.html">大会プログラム</a>
      </div>
    ),
  },
  {
    date: "2025",
    title: 'Shusuke Komatsu, Kazuyo Onishi, Koki Tanaka, Dohyun Kim, Koichiro Yoshino. “Efficient ASR Domain Adaptation with Long Noun Phrases: Harnessing the Linguistic Characteristics of Japanese”',
    label: '',
    location: '2025/12',
    content: (
      <div>
        IEEE Automatic Speech Recognition and Understanding Workshop (ASRU 2025), pp. 1–7.
        {' '}<a href="https://doi.org/10.1109/ASRU65441.2025.11434793">DOI</a>
      </div>
    ),
  },
  {
    date: "2025",
    title: '池見侑亮, 大西一誉, 小松秀輔, 阪本浩太郎, 田中康紀, 金道鉉, 吉野幸一郎. 「事前学習済み音響特徴を用いたConformerベースEnd-to-End話者分離モデル」',
    label: '',
    location: '2025/9',
    content: (
      <div>
        第20回言語処理若手シンポジウム（YANS2025）, ポスター発表, S1-P01.
        {' '}<a href="https://yans.anlp.jp/entry/yans2025program">大会プログラム</a>
      </div>
    ),
  },
  {
    date: "2025",
    title: '小松秀輔, 大西一誉, 田中康紀, 金道鉉, 吉野幸一郎. 「合成単語データを用いた低コスト高品質な音声認識のドメイン適応」',
    label: '',
    location: '2025/3',
    content: (
      <div>
        言語処理学会 第31回年次大会（NLP2025）, ポスター発表, P5-14.
        {' '}<a href="https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/P5-14.pdf">発表論文（PDF）</a>
      </div>
    ),
  },
  {
    date: "2023",
    title: '田中康紀, 須藤克仁, 中村哲. "ByT5 の Attention を用いたトークン結合" 言語処理学会 第29回年次大会 p800-p804, ポスター発表',
    label: '',
    location: '2023/3',
    content: (
      <div>
        <a href="https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/Q3-5.pdf">発表論文（PDF）</a>
      </div>
    ),
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
