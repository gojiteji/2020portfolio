module.exports = {
  pathPrefix: '',
  siteUrl: 'https://gojiteji.com',
  siteTitle: 'Koki Tanaka',
  siteDescription: 'Koki\'s portfolio',
  author: 'admin',
  postsForArchivePage: 3,
  defaultLanguage: 'en',

pages: {
    home: '/',
    works: 'works',
    experience: 'experience',
  },
  social: {
    github: 'https://github.com/gojiteji',
    twitter: 'https://twitter.com/gojiteji',
    linkedin: 'https://www.linkedin.com/in/koki-tanaka-6bb38a16a',
    huggingface: 'https://huggingface.co/gojiteji',
    sigmoid: 'https://sigmoid.social/@gojiteji',
    facebook: 'https://www.facebook.com/gojiteji/',
    note: 'https://note.com/gojiteji',
    youtube: 'https://www.youtube.com/@gojiteji',

  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-143776882-1',
  //tags: {
  //  javascript: {
  //    name: 'javascript',
  //    description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
  //    color: '#f0da50',
  //  },
  //  nodejs: {
  //    name: 'Node.js',
  //    description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
  //    color: '#90c53f',
  //  },
  //  rxjs: {
  //    name: 'RxJS',
  //    description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
  //    color: '#eb428e',
  //  },
  //  typescript: {
  //    name: 'typescript',
  //    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  //    color: '#257acc',
  //  },
  //  reactjs: {
  //    name: 'reactjs',
  //    description: 'React is an open source JavaScript library used for designing user interfaces.',
  //    color: '#61dbfa',
  //  },
  //  gatsby: {
  //    name: 'Gatsby.js',
  //    description: 'A framework built over ReactJS to generate static page web application.  ',
  //    color: '#6f309f',
  //  },
  //  html: {
  //    name: 'HTML',
  //    description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
  //    color: '#dd3431',
  //  },
  //  css: {
  //    name: 'css',
  //    description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
  //    color: '#43ace0',
  //  },
  //  python: {
  //    name: 'python',
  //    description: 'A general purpose programming language that is widely used for developing various applications.',
  //    color: '#f9c646',
  //  },
//
  //},
};
