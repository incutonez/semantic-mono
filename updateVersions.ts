import { execSync } from "child_process";

const stdio = [0, 1, 2];
try {
	const files: string[] = JSON.parse(process.argv[2]);
	const PackageMatch = /^packages\/([^/]*)/;
	const Packages: Record<string, boolean> = {};
	files.forEach((file) => {
		const packageName = file.match(PackageMatch)[1];
		if (packageName && !Packages[packageName]) {
			Packages[packageName] = true;
			console.log('doing', packageName)
			execSync("npx semantic-release --deps.bump=inherit", {
				stdio,
				cwd: `packages/${packageName}`,
			});
		}
	})
}
catch (ex) {
	throw ex;
}

