import path from 'path';
import fs from 'fs';
import compiler from './compiler';

describe('slate-cssvar-loader ', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('replaces CSS custom properties with liquid variables', async () => {
    jest.mock('../config');
    const stats = await compiler('./fixtures/test.css');
    const output = stats.toJson().modules[0].source;

    const expected = fs.readFileSync(
      path.resolve(__dirname, './fixtures/expected.js'),
      'utf8',
    );
    expect(output).toBe(expected);
  });

  test('missing liquid variable', async () => {
    jest.mock('../config');
    const stats = await compiler('./fixtures/invalid.css');
    const output = stats.toJson().modules[0].source;

    expect(output).toBe(
      'throw new Error("Module build failed: Liquid variable not found for CSS variable INVALID");',
    );
  });

  test('loader does not run when disabled', async () => {
    jest.mock('../config', () => {
      return {
        cssVarLoaderEnable: false,
      };
    });
    const stats = await compiler('./fixtures/test.css');
    const output = stats.toJson().modules[0].source;

    const expected = fs.readFileSync(
      path.resolve(__dirname, './fixtures/expected-disabled.js'),
      'utf8',
    );
    expect(output).toBe(expected);
  });
});
