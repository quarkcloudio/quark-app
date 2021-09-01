const isH5 = process.env.CLIENT_ENV = 'h5'
// 你自己的请求域名
const HOST = '"http://127.0.0.1:9527"'; 

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST: HOST
  },
  mini: {},
  h5: {
    devServer: {
      // 设置代理来解决 H5 请求的跨域问题
      proxy: {
        '/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/': '/'
          },
          changeOrigin: true
        },
      }
    }
  }
}