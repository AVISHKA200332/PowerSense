module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        (warning) => {
          const message = warning.message || '';
          const resource = warning.module && warning.module.resource ? warning.module.resource : '';

          return (
            message.includes('Failed to parse source map') &&
            resource.includes('node_modules')
          );
        },
      ];

      return webpackConfig;
    },
  },
};
