const slateConfig = require('@shopify/slate-config');

module.exports = slateConfig.generate({
  items: [
    {
      id: 'cssVarLoaderEnable',
      default: true,
      description: 'Enable/disable cssvar loader plugin',
      type: 'boolean',
    },
    {
      id: 'cssVarLoaderLiquidPath',
      default: [slateConfig.resolveTheme('src/snippets/css-variables.liquid')],
      description:
        'A array of string paths to liquid files that associate css variables to liquid variables',
      type: 'object',
    },
  ],
});
