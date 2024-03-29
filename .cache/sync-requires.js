const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/gojiteji/Documents/2020portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-index-jsx": hot(preferDefault(require("/Users/gojiteji/Documents/2020portfolio/src/pages/404/index.jsx"))),
  "component---src-pages-experience-index-jsx": hot(preferDefault(require("/Users/gojiteji/Documents/2020portfolio/src/pages/experience/index.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/gojiteji/Documents/2020portfolio/src/pages/index.jsx"))),
  "component---src-pages-works-index-jsx": hot(preferDefault(require("/Users/gojiteji/Documents/2020portfolio/src/pages/works/index.jsx"))),
  "component---src-templates-post-post-jsx": hot(preferDefault(require("/Users/gojiteji/Documents/2020portfolio/src/templates/post/post.jsx")))
}

