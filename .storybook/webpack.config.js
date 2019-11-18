module.exports = ({ config }) => {
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', {flow: false, typescript: true}]],
      plugins: [
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve('babel-plugin-remove-graphql-queries'),
      ],
    },
  });
  config.resolve.mainFields = ["browser", "module", "main"]
  config.resolve.extensions.push('.ts', '.tsx');

  return config
}