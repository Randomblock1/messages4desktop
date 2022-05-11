const nativefier = require("nativefier").default;
const fs = require("fs");
const process = require("process");

inputPlatform = process.argv[2];
packageJson = fs.readFileSync("package.json");

var options = {
  name: "Google Messages",
  targetUrl: "https://messages.google.com/web",
  version: JSON.parse(packageJson)["version"],
  out: "dist",
  counter: true,
  bounce: true,
  showMenuBar: false,
  disableDevTools: true,
  overwrite: true,
  honest: true,
  darwinDarkModeSupport: true,
  singleInstance: false,
  inject: ["inject.js"],
};

switch (inputPlatform) {
  case "windows":
    options.platform = "windows";
    options.arch = "x64";
    options.tray = "start-in-tray";
    break;

  case "linux":
    options.platform = "linux";
    options.arch = "x64";
    options.tray = "start-in-tray";
    break;

  case "osx":
    options.platform = "osx";
    options.arch = "universal";
    break;

  default:
    console.log("No platform specified, building for this system");
    break;
}

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log("App has been generated to", appPath);
});
