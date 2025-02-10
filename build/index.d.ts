import type { BunPlugin } from 'bun';

export type PluginOptions = Partial<{
  warnDuplicatedImports: boolean;
  defaultExtension: string;
  compress: boolean;
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
  warnDuplicatedImports,
  defaultExtension,
  compress,
  include,
  watch,
  root
}?: PluginOptions): BunPlugin;
