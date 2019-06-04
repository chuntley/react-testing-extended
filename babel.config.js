const presets = [
  '@babel/preset-react',
  [
    '@babel/env',
    {
      targets: {
        node: true
      },
    },
  ],
];

module.exports = { presets };