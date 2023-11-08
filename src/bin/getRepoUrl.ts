import {exec} from "child_process";


export function getRepoUrl(){

	return new Promise<string | undefined>(resolve => {
		exec("git remote get-url origin", (err, url) => {
			if (err !== null) {
				console.log("This git repository does not have a remote origin !");
				resolve(undefined);
				return;
			}

			resolve(url);

		});
	});
}