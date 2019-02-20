module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-react',
    '@babel/preset-env',
  ];

  const plugins = [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-syntax-dynamic-import',
    ['transform-imports', {
      'react-router': {
        transform: 'react-router/${member}',
        preventFullImport: true,
      },
    }],
  ];

  return {
    presets,
    plugins,
  };
};
