var PrerenderSpaPlugin = require("prerender-spa-plugin");
var path = require("path");

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },

  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new PrerenderSpaPlugin({
          staticDir: path.resolve(__dirname, "dist"),
          routes: ["/"],
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true
          }
        })
      ]
    };
  },

  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: "default",
      region: "us-east-1",
      bucket: "gashkov.com",
      createBucket: true,
      staticHosting: true,
      staticIndexPage: "index.html",
      staticErrorPage: "index.html",
      assetPath: "dist",
      assetMatch: "**",
      deployPath: "/",
      acl: "public-read",
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5,
      pluginVersion: "3.0.0"
    }
  }
};
