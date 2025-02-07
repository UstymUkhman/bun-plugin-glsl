import GLSL from "../plugin/test/glsl/main.frag";
import WGSL from "../plugin/test/wgsl/main.wgsl";

console.clear();
console.info(`----- GLSL: -----\n\n${GLSL}`);
console.info(`----- WGSL: -----\n\n${WGSL}`);

console.info(`GLSL Shader Length: ${GLSL.length} characters.`);
console.info(`WGSL Shader Length: ${WGSL.length} characters.`);
