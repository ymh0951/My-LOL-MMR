const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   transpileDependencies: true,
  // 환경 변수들은 process.env 객체에 정의되어 있다.
  // NODE_ENV -> 앱이 실행되는 모드 3개의 기본 모드가 있다. ("development", "production", "test")
  outputDir: '../docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/My-LOL-MMR/'
    : '/'
})
