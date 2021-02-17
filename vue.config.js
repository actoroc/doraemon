module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
      },
      extensions: ['.js', '.css', '.vue', '.json'],
    },
  },
};
