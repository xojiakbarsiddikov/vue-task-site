const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // rules: [
  //   {
  //     test: /\.s(c|a)ss$/,
  //     use: [
  //       'vue-style-loader',
  //       'css-loader',
  //       {
  //         loader: 'sass-loader',
  //         options: {
  //           implementation: require('sass'),
  //           indentedSyntax: true // optional
  //         },
  //       },
  //     ],
  //   },
  // ],
})
