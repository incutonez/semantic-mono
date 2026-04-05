import { execSync } from "child_process";
import { existsSync } from "node:fs";

const stdio = [0, 1, 2];
console.log('here', process.argv[2])
// const cwd = `packages/${process.argv[2]}`;
// if (!existsSync(cwd)) {
// 	throw new Error("cwd is invalid");
// }
// execSync("npx semantic-release --deps.bump=inherit", {
// 	stdio,
// 	cwd,
// });
