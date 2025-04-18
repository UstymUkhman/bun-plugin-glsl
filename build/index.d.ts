import type { LoadingOptions } from '../plugin/src/types';
import type { BunPlugin } from 'bun';

/**
 * @typedef {Object} PluginOptions
 * @description Plugin config object
 * 
 * @property {RegExp}      include                 RegExp of file extensions to import
 * @property {boolean}     removeDuplicatedImports Automatically remove an already imported chunk
 * @property {boolean}     warnDuplicatedImports   Warn if the same chunk was imported multiple times
 * @property {string}      defaultExtension        Shader suffix when no extension is specified
 * @property {Minify}      minify                  Minify output shader code
 * @property {boolean}     watch                   Recompile shader on change
 * @property {string}      root                    Directory for root imports
 * 
 * @default {
 *   defaultExtension: DEFAULT_EXTENSION,
 *   removeDuplicatedImports: false,
 *   warnDuplicatedImports: true,
 *   include: DEFAULT_SHADERS,
 *   minify: false,
 *   watch: true,
 *   root: '/'
 * }
 */
export type PluginOptions = Partial<LoadingOptions> & {
  include?: RegExp;
  watch?: boolean;
};

/**
 * @function
 * @name glsl
 * @description Plugin entry point to import,
 * inline, (and minify) GLSL/WGSL shader files
 * 
 * @see {@link https://bun.sh/docs/runtime/plugins}
 * @link https://github.com/UstymUkhman/bun-plugin-glsl
 * 
 * @param {PluginOptions} options Plugin config object
 * 
 * @returns {BunPlugin} Bun plugin that converts shader code
 */
export default function ({
  removeDuplicatedImports,
  warnDuplicatedImports,
  defaultExtension,
  include,
  minify,
  watch,
  root
}?: PluginOptions): BunPlugin;
