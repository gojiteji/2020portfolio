module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Koki Tanaka","short_name":"Koki Tanaka","start_url":"/","background_color":"#FC965D","theme_color":"#FC965D","display":"standalone","icon":"src/images/icon.png","legacy":true,"cache_busting_mode":"query","include_favicon":true,"theme_color_in_head":true,"cacheDigest":"23e67befa94b3ecb84b8945208cfad93"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1000,"quality":80,"showCaptions":true,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-143776882-1","head":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"black","showSpinner":true},
    }]
