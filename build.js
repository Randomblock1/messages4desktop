var nativefier = require("nativefier").default;
var process = require("process");

inputPlatform = process.argv[2];

var options = {
  name: "Google Messages", // will be inferred if not specified
  targetUrl: "https://messages.google.com/web", // required
  version: Date.now(),
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
  console.log("App has been nativefied to", appPath);
});
