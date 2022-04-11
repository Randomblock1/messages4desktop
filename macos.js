const universal = require("@electron/universal");
path = process.cwd() + "/";
const fse = require("fs-extra");

console.log("Creating universal binary...");
fse.copySync(
  "dist/Google Messages-darwin-arm64",
  "dist/Google Messages-darwin-universal",
  { overwrite: true }
);
universal.makeUniversalApp({
  x64AppPath: path + "dist/Google Messages-darwin-x64/Google Messages.app",
  arm64AppPath: path + "dist/Google Messages-darwin-arm64/Google Messages.app",
  outAppPath:
    path + "dist/Google Messages-darwin-universal/Google Messages.app",
  force: true,
});
