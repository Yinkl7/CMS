module.exports = {
  outputDir: './build',
  // 为资源路径增加 ./ 一般测试时使用
  // publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
