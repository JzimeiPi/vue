module.exports = {
  plugins: [
    require('autoprefixer')({ 
      overrideBrowserslist: [
        'last 2 versions',  // 兼容浏览器最近两个版本
        '>1%'   // 兼容市场占有率大于1%的浏览器（世界的）
      ] 
    })
  ]
}