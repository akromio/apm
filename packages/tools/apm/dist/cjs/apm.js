#!/usr/bin/env node
"use strict";

var _core = require("@dogmalang/core");
const pkg = _core.dogma.use(require("../../package"));
const env = _core.dogma.use(require("./env"));
const {
  createCommands,
  handleErrors
} = _core.dogma.use(require("@akromio/cli"));
const DescCommand = _core.dogma.use(require("./commands/DescCommand"));
const EnvCommand = _core.dogma.use(require("./commands/EnvCommand"));
const InstallCommand = _core.dogma.use(require("./commands/InstallCommand"));
const UploadCommand = _core.dogma.use(require("./commands/skynet/UploadCommand"));
const GenKeyPairCommand = _core.dogma.use(require("./commands/skynet/GenKeyPairCommand"));
const GetEntryCommand = _core.dogma.use(require("./commands/skynet/GetEntryCommand"));
const GetEntryLinkCommand = _core.dogma.use(require("./commands/skynet/GetEntryLinkCommand"));
const yargs = require("yargs");
const appName = _core.dogma.getItem(pkg.name.split("/"), -1);
const {
  years
} = pkg;
const author = pkg.author.name;
yargs.scriptName(appName);
yargs.version("v", pkg.version);
yargs.help("help");
yargs.epilogue(`Copyright © ${years} ${author}. All rights reserved.
Product of Spain, EU, made in Valencia.`);
yargs.fail(handleErrors);
const commands = [DescCommand(), EnvCommand(), InstallCommand(), [{
  ["name"]: "skynet",
  ["desc"]: "Perform operations on Skynet."
}, GenKeyPairCommand(), GetEntryCommand(), GetEntryLinkCommand(), UploadCommand()]];
createCommands(yargs, commands);
yargs.argv;