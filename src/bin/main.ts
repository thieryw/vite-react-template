import { createGithubPagesDeployCi } from "./createGithubPagesDeployCi";
import { setPackageJsonHomepage } from "./setPackageJsonHomepage";
import { writeViteConfigFile } from "./writeViteConfigFile";
import { clean } from "./clean";


await setPackageJsonHomepage();
await writeViteConfigFile();
createGithubPagesDeployCi();
clean();