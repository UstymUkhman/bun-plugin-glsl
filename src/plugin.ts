import { plugin } from "bun";

const EXT = /\.(glsl|wgsl|vert|frag|vs|fs)$/;

plugin({
  name: "Bun Plugin GLSL",

  setup(build) {
    build.onLoad({ filter: EXT }, async (args) => {
      const shader = await Bun.file(args.path).text();

      return {
        loader: "object",
        exports: { default: shader }
      };
    });
  }
});
