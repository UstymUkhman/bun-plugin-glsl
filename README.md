# Bun Plugin GLSL

> Import, inline (and compress) GLSL shader files

<!-- ![npm](https://img.shields.io/npm/dt/bun-plugin-glsl?style=flat-square) -->
![GitHub package.json version](https://img.shields.io/github/package-json/v/UstymUkhman/bun-plugin-glsl?color=brightgreen&style=flat-square)
![GitHub](https://img.shields.io/github/license/UstymUkhman/bun-plugin-glsl?color=brightgreen&style=flat-square)

_Inspired by [vite-plugin-glsl](https://github.com/UstymUkhman/vite-plugin-glsl), compatible with [Babylon.js](https://www.babylonjs.com/), [three.js](https://threejs.org/) and [lygia](https://lygia.xyz/)._

## Installation ##

```bash
bun add bun-plugin-glsl --dev
```

## Usage ##

```js
import glsl from 'bun-plugin-glsl';

Bun.plugin(glsl());
```

### With TypeScript ###

Add extension declarations to your [`types`](https://www.typescriptlang.org/tsconfig#types) in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": [
      "bun-plugin-glsl/ext"
    ]
  }
}
```

or as a [package dependency directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) to your global types:

```ts
/// <reference types="bun-plugin-glsl/ext" />
```

## Default Options ##

```js
glsl({
  include: /\.(glsl|wgsl|vert|frag|vs|fs)$/, // RegExp of file extensions to import
  warnDuplicatedImports: true,               // Warn if the same chunk was imported multiple times
  defaultExtension: 'glsl',                  // Shader suffix when no extension is specified
  compress: false,                           // Compress output shader code
  watch: true,                               // Recompile shader on change
  root: '/'                                  // Directory for root imports
})
```
