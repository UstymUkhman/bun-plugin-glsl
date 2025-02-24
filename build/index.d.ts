import type { BunPlugin } from 'bun';
import type { Compress } from '../plugin/src/types';

/**
 * @typedef {Object} PluginOptions
 * @description Plugin config object
 * 
 * @property {RegExp}      include                 RegExp of file extensions to import
 * @property {boolean}     removeDuplicatedImports Automatically remove an already imported chunk
 * @property {boolean}     warnDuplicatedImports   Warn if the same chunk was imported multiple times
 * @property {string}      defaultExtension        Shader suffix when no extension is specified
 * @property {Compress}    compress                Compress output shader code
 * @property {boolean}     watch                   Recompile shader on change
 * @property {string}      root                    Directory for root imports
 * 
 * @default {
 *   defaultExtension: DEFAULT_EXTENSION,
 *   removeDuplicatedImports: false,
 *   warnDuplicatedImports: true,
 *   include: DEFAULT_SHADERS,
 *   compress: false,
 *   watch: true,
 *   root: '/'
 * }
 */
export type PluginOptions = Partial<{
  removeDuplicatedImports: boolean;
  warnDuplicatedImports: boolean;
  defaultExtension: string;
  compress: Compress;
  include: RegExp;
  watch: boolean;
  root: string;
}>;

/**
 * @function
 * @name glsl
 * @description Plugin entry point to import,
 * inline, (and compress) GLSL shader files
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
  compress,
  include,
  watch,
  root
}?: PluginOptions): BunPlugin;
