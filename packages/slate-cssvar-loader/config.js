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
      default: slateConfig.resolveTheme('src/snippets/css-variables.liquid'),
      description:
        'A path to the liquid file where css variables are associated to their liquid variable',
      type: 'string',
    },
  ],
});
