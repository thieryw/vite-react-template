import { writeFileSync } from "fs"
import { join } from "path";
import { getRepoHomepage } from "./getRepoHomepage"


export async function setPackageJsonHomepage() {

    const homepage = await getRepoHomepage();

    const packageJson = require(join(__dirname, "..", "..", "package.json"));

    if (homepage !== undefined) {
        packageJson["homepage"] = homepage
    }

    writeFileSync(
        "package.json",
        JSON.stringify({
            ...packageJson
        }, null, 2)
    )

}