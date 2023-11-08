import { getRepoUrl } from "./getRepoUrl";


export async function getRepoHomepage() {
    const url = await getRepoUrl();
    if (url === undefined) {
        return;
    }
    const [r, u] =
        url
            .toString()
            .replace(/\n/g, "")
            .replace(".git", "")
            .replace(/:/g, "/")
            .replace(/\r?\n$/, "")
            .split("/")
            .reverse();

    return "https://" + u + ".github.io/" + r;
};