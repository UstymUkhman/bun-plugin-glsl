/**
 * @module bun-plugin-glsl
 * @author Ustym Ukhman <ustym.ukhman@gmail.com>
 * @description Import, inline (and minify) GLSL/WGSL shader files
 * @version 0.2.2
 * @license MIT
 */

import loadShader from '../plugin/src/loadShader';
import type { PluginOptions } from '../build';
import type { BunPlugin } from 'bun';

/**
 * @function
 * @name glsl
 * @description Plugin entry point to import,
 * inline, (and minify) GLSL/WGSL shader files
 * 
 * @see {@link https://bun.sh/docs/bundler/plugins}
 * @link https://github.com/UstymUkhman/bun-plugin-glsl
 * 
 * @param {PluginOptions} options Plugin config object
 * 
 * @returns {BunPlugin} Bun plugin that converts shader code
 */
export default function ({
    include = /\.(glsl|wgsl|vert|frag|vs|fs)$/,
    removeDuplicatedImports = false,
    warnDuplicatedImports = true,
    defaultExtension = 'glsl',
    importKeyword = '#include',
    minify = false,
    watch = true,
    root = '/'
  } = {}
) {
  return {
    name: 'bun-plugin-glsl',

    setup (build) {
      const prod = Bun.env.NODE_ENV === 'production';

      build.onLoad({ filter: include }, async (args) => {
        const source = await Bun.file(args.path).text();

        const { dependentChunks, outputShader } = await loadShader(
          source, args.path, {
            removeDuplicatedImports,
            warnDuplicatedImports,
            defaultExtension,
            importKeyword,
            minify,
            root
          });

        /**
         * Adding a file to the watch list is not yet supported in bun.
         * Implemented a workaround described in the following issue:
         * https://github.com/UstymUkhman/bun-plugin-glsl/issues/1
         */
        if (watch && !prod) {
          const files = new Set();

          dependentChunks.forEach((chunks, file) => {
            chunks.forEach(files.add, files);
            files.add(file);
          });

          await Promise.all(Array.from(files).map(
            file => import(`${file}?`),
            { with: { type: "text" } }
          ));
        }

        return {
          exports: { default: outputShader },
          loader: 'object'
        };
      });
    }
  } as BunPlugin;
};
