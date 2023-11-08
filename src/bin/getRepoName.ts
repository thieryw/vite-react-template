import { exec } from "child_process";

export function getRepoName() {
    return new Promise<string | null>(resolve => {
        exec("git remote get-url origin", (err, data) => {
            if (err !== null) {
                resolve(null);
                return;
            }
            const splitData = data.split("/");

            resolve(splitData[splitData.length - 1].replace("\n", ""));
        })
    })
};
