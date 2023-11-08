import { rmSync, writeFileSync } from "fs";
import { join } from "path";




export function clean() {
	const packageJsonPath = join(__dirname, "..", "..", "package.json");
	const packageJson = require(packageJsonPath);
	delete packageJson["scripts"]["postinstall"];
	writeFileSync(packageJsonPath, JSON.stringify({ ...packageJson }, null, 2));
	rmSync(join(__dirname, "..", "bin"), { "force": true, "recursive": true });
}