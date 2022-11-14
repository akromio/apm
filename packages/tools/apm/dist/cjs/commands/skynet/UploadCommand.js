"use strict";

var _core = require("@dogmalang/core");
const path = _core.dogma.use(require("path"));
const inquirer = _core.dogma.use(require("inquirer"));
const {
  SkynetClient
} = _core.dogma.use(require("@skynetlabs/skynet-nodejs"));
const {
  RegistryUploaderBuilder
} = _core.dogma.use(require("@akromio/registry-uploader"));
const {
  RegistryCommandBase
} = _core.dogma.use(require("@akromio/cli"));
const {
  baseOptions
} = RegistryCommandBase;
const $UploadCommand = class UploadCommand extends RegistryCommandBase {
  constructor(_) {
    super(_);
    /* c8 ignore start */
    if (_ == null) _ = {};
    /* c8 ignore stop */ /* c8 ignore start */
    if (_['name'] != null) (0, _core.expect)('name', _['name'], _core.list); /* c8 ignore stop */
    Object.defineProperty(this, 'name', {
      value: (0, _core.coalesce)(_['name'], ["upload <dirPath>", "u"]),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['desc'] != null) (0, _core.expect)('desc', _['desc'], _core.text); /* c8 ignore stop */
    Object.defineProperty(this, 'desc', {
      value: (0, _core.coalesce)(_['desc'], "Upload a local directory, as a standalone registry, to Skynet."),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['positionals'] != null) (0, _core.expect)('positionals', _['positionals'], _core.map); /* c8 ignore stop */
    Object.defineProperty(this, 'positionals', {
      value: (0, _core.coalesce)(_['positionals'], {
        ["dirPath"]: {
          ["type"]: "string",
          ["desc"]: "The local dir path to upload."
        }
      }),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['options'] != null) (0, _core.expect)('options', _['options'], _core.map); /* c8 ignore stop */
    Object.defineProperty(this, 'options', {
      value: (0, _core.coalesce)(_['options'], {
        ["yes"]: {
          ["type"]: "boolean",
          ["alias"]: ["y"],
          ["desc"]: "Respond yes to the confirmation.",
          ["default"]: false
        },
        ["privateKey"]: {
          ["type"]: "string",
          ["alias"]: ["k"],
          ["desc"]: "The private key for updating the Skynet underlying registry entry."
        },
        ["dataKey"]: {
          ["type"]: "string",
          ["alias"]: ["d"],
          ["desc"]: "The data key for updating the Skynet underlying registry entry."
        }
      }),
      writable: false,
      enumerable: true
    });
    Object.defineProperty(this, 'defaults', {
      value: (0, _core.coalesce)(_['defaults'], {
        ["skynet"]: {
          ["portal"]: _core.ps.env.KRM_REGISTRY_SKYNET_PORTAL
        }
      }),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (this._pvt_1daf514ef8cc14ed8152b38dfe3d197e___init__ instanceof Function) this._pvt_1daf514ef8cc14ed8152b38dfe3d197e___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_1daf514ef8cc14ed8152b38dfe3d197e___post__ instanceof Function) this._pvt_1daf514ef8cc14ed8152b38dfe3d197e___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_1daf514ef8cc14ed8152b38dfe3d197e___validate__ instanceof Function) this._pvt_1daf514ef8cc14ed8152b38dfe3d197e___validate__(); /* c8 ignore stop */
  }
};

const UploadCommand = new Proxy($UploadCommand, {
  apply(receiver, self, args) {
    return new $UploadCommand(...args);
  }
});
module.exports = exports = UploadCommand;
UploadCommand.prototype.handle = async function (argv) {
  const self = this; /* c8 ignore next */
  _core.dogma.expect("argv", argv, _core.map);
  let {
    dirPath,
    yes,
    privateKey,
    dataKey
  } = argv;
  try {
    if (dirPath == ".") {
      dirPath = _core.ps.workDir;
    }
    if (!yes) {
      const q = [{
        ["name"]: "yes",
        ["type"]: "confirm",
        ["message"]: `Are you sure you like to upload '${dirPath}' to Skynet?`,
        ["default"]: false
      }];
      if (!(0, await inquirer.prompt(q)).yes) {
        return;
      }
    }
    const portal = _core.ps.env.KRM_REGISTRY_SKYNET_PORTAL;
    const uploader = RegistryUploaderBuilder().create({
      'impl': "skynet",
      'portal': portal
    });
    const skylink = (0, await uploader.uploadRegistry(dirPath));
    (0, _core.print)(`Registry created and uploaded. Skylink: '${skylink}'.`);
    if (dataKey) {
      var _privateKey;
      if (!(privateKey = (_privateKey = privateKey) !== null && _privateKey !== void 0 ? _privateKey : _core.ps.env.KRM_REGISTRY_SKYNET_PRIVATE_KEY)) {
        (0, _core.print)("Private key expected. Not passed and env variable unset.");
        _core.ps.exit(1);
      }
      const skynet = new SkynetClient(portal);
      0, await skynet.db.setDataLink(privateKey, dataKey, skylink);
      (0, _core.print)(`Skynet registry entry '${dataKey}' updated, linked to '${skylink}'.`);
    }
  } catch (e) {
    if (_core.dogma.like(e, "ENOENT: no such file or directory")) {
      (0, _core.print)(`'${dirPath}' doesn't exist or can't be accessed.`);
    } else {
      (0, _core.print)(e);
    }
    _core.ps.exit(1);
  }
};