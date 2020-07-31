module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        ['module-resolver',
        {
          alias: {
            '@common': "./src/common",
            '@core': "./src/core",
            '@config': "./src/config",
            '@components': "./src/components",
            '@models': "./src/models",
            '@pages': "./src/pages",
            '@store': "./store",
            '@services': "./src/services"
          }
        }]
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      }
    }
  };
};
