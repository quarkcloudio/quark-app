module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  // apiHost:"http://127.0.0.1:3000",
  apiHost:"",
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': 'api'
          }
        },
      },
    }
  },
}
