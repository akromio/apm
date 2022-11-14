"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkynetConnector = exports.RegistryUploaderBuilder = exports.RegistryUploader = void 0;
var _core = require("@dogmalang/core");
const RegistryUploader = _core.dogma.use(require("./RegistryUploader"));
exports.RegistryUploader = RegistryUploader;
const RegistryUploaderBuilder = _core.dogma.use(require("./RegistryUploaderBuilder"));
exports.RegistryUploaderBuilder = RegistryUploaderBuilder;
const SkynetConnector = _core.dogma.use(require("./impl/skynet/SkynetConnector"));
exports.SkynetConnector = SkynetConnector;