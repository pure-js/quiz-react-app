module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-flow',
  ];

  const plugins = [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets,
    plugins,
  };
};
