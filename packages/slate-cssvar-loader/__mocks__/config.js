import path from 'path';

module.exports = {
  cssVarLoaderEnable: true,
  cssVarLoaderLiquidPath: path.resolve(
    __dirname,
    '../tests/fixtures/css-variables.liquid',
  ),
};
