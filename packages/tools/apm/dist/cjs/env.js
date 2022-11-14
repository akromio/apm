"use strict";

var _core = require("@dogmalang/core");
var _ps$env$KRM_DIR_NAME, _ps$env$KRM_ENV_FILE, _ps$env$KRM_PRIVATE_E, _ps$env$KRM_NODE_PATH, _ps$env$KRM_APM_DIR_N, _ps$env$KRM_JOB_CATAL, _ps$env$KRM_REGISTRIE, _ps$env$KRM_REGISTRY_, _ps$env$KRM_REGISTRY_2;
const defaults = _core.dogma.use(require("@akromio/cli-defaults"));
const dotenv = _core.dogma.use(require("dotenv"));
const path = _core.dogma.use(require("path"));
const root = (_ps$env$KRM_DIR_NAME = _core.ps.env.KRM_DIR_NAME) !== null && _ps$env$KRM_DIR_NAME !== void 0 ? _ps$env$KRM_DIR_NAME : defaults.dir;
const envFile = (_ps$env$KRM_ENV_FILE = _core.ps.env.KRM_ENV_FILE) !== null && _ps$env$KRM_ENV_FILE !== void 0 ? _ps$env$KRM_ENV_FILE : defaults.envFile.public;
const privateEnvFile = (_ps$env$KRM_PRIVATE_E = _core.ps.env.KRM_PRIVATE_ENV_FILE) !== null && _ps$env$KRM_PRIVATE_E !== void 0 ? _ps$env$KRM_PRIVATE_E : defaults.envFile.private;
if (envFile) {
  dotenv.config({
    'path': path.join(root, envFile)
  });
}
if (privateEnvFile) {
  dotenv.config({
    'path': path.join(root, privateEnvFile)
  });
}
_core.ps.env.KRM_DIR_NAME = root;
_core.ps.env.KRM_ENV_FILE = envFile;
_core.ps.env.KRM_PRIVATE_ENV_FILE = privateEnvFile;
_core.ps.env.KRM_NODE_PATH = (_ps$env$KRM_NODE_PATH = _core.ps.env.KRM_NODE_PATH) !== null && _ps$env$KRM_NODE_PATH !== void 0 ? _ps$env$KRM_NODE_PATH : _core.ps.workDir;
_core.ps.env.KRM_APM_DIR_NAME = (_ps$env$KRM_APM_DIR_N = _core.ps.env.KRM_APM_DIR_NAME) !== null && _ps$env$KRM_APM_DIR_N !== void 0 ? _ps$env$KRM_APM_DIR_N : defaults.apm.dirName;
_core.ps.env.KRM_JOB_CATALOGS_PATH = (_ps$env$KRM_JOB_CATAL = _core.ps.env.KRM_JOB_CATALOGS_PATH) !== null && _ps$env$KRM_JOB_CATAL !== void 0 ? _ps$env$KRM_JOB_CATAL : defaults.jobs.catalogs.path;
_core.ps.env.KRM_REGISTRIES = (_ps$env$KRM_REGISTRIE = _core.ps.env.KRM_REGISTRIES) !== null && _ps$env$KRM_REGISTRIE !== void 0 ? _ps$env$KRM_REGISTRIE : "skynet";
_core.ps.env.KRM_REGISTRY_SKYNET_PORTAL = (_ps$env$KRM_REGISTRY_ = _core.ps.env.KRM_REGISTRY_SKYNET_PORTAL) !== null && _ps$env$KRM_REGISTRY_ !== void 0 ? _ps$env$KRM_REGISTRY_ : defaults.registry.skynet.portal;
_core.ps.env.KRM_REGISTRY_SKYNET_SKYLINK = (_ps$env$KRM_REGISTRY_2 = _core.ps.env.KRM_REGISTRY_SKYNET_SKYLINK) !== null && _ps$env$KRM_REGISTRY_2 !== void 0 ? _ps$env$KRM_REGISTRY_2 : defaults.registry.skynet.skylink;