module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
        common:'@/common',
      },
      extensions: ['.js', '.css', '.vue', '.json'],
    },
  },
};
