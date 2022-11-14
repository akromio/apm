"use strict";

var _core = require("@dogmalang/core");
const path = _core.dogma.use(require("path"));
const {
  CatalogInstaller
} = _core.dogma.use(require("@akromio/catalog-installer"));
const {
  RegistryCommandBase
} = _core.dogma.use(require("@akromio/cli"));
const {
  baseOptions
} = RegistryCommandBase;
const $InstallCommand = class InstallCommand extends RegistryCommandBase {
  constructor(_) {
    super(_);
    /* c8 ignore start */
    if (_ == null) _ = {};
    /* c8 ignore stop */ /* c8 ignore start */
    if (_['name'] != null) (0, _core.expect)('name', _['name'], _core.list); /* c8 ignore stop */
    Object.defineProperty(this, 'name', {
      value: (0, _core.coalesce)(_['name'], ["install <catalogName>", "i"]),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['desc'] != null) (0, _core.expect)('desc', _['desc'], _core.text); /* c8 ignore stop */
    Object.defineProperty(this, 'desc', {
      value: (0, _core.coalesce)(_['desc'], "Install a catalog stored in a registry."),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['positionals'] != null) (0, _core.expect)('positionals', _['positionals'], _core.map); /* c8 ignore stop */
    Object.defineProperty(this, 'positionals', {
      value: (0, _core.coalesce)(_['positionals'], {
        ["catalogName"]: {
          ["type"]: "string",
          ["desc"]: "The catalog name to download and install."
        }
      }),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['options'] != null) (0, _core.expect)('options', _['options'], _core.map); /* c8 ignore stop */
    Object.defineProperty(this, 'options', {
      value: (0, _core.coalesce)(_['options'], {
        ["registries"]: baseOptions.registries,
        ["alias"]: {
          ["type"]: "string",
          ["alias"]: ["a", "as"],
          ["desc"]: "Name to set when installed if we want to change it."
        }
      }),
      writable: false,
      enumerable: true
    });
    Object.defineProperty(this, 'defaults', {
      value: (0, _core.coalesce)(_['defaults'], {
        ["skynet"]: {
          ["portal"]: _core.ps.env.KRM_REGISTRY_SKYNET_PORTAL,
          ["skylink"]: _core.ps.env.KRM_REGISTRY_SKYNET_SKYLINK
        }
      }),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (this._pvt_096152120eabb5e26fdd542ff453a735___init__ instanceof Function) this._pvt_096152120eabb5e26fdd542ff453a735___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_096152120eabb5e26fdd542ff453a735___post__ instanceof Function) this._pvt_096152120eabb5e26fdd542ff453a735___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_096152120eabb5e26fdd542ff453a735___validate__ instanceof Function) this._pvt_096152120eabb5e26fdd542ff453a735___validate__(); /* c8 ignore stop */
  }
};

const InstallCommand = new Proxy($InstallCommand, {
  apply(receiver, self, args) {
    return new $InstallCommand(...args);
  }
});
module.exports = exports = InstallCommand;
InstallCommand.prototype.handle = async function (argv) {
  const self = this; /* c8 ignore next */
  _core.dogma.expect("argv", argv, _core.map);
  let {
    catalogName,
    alias
  } = argv;
  {
    const registries = (0, await this.createRegistries(argv).connect());
    if (!path.extname(catalogName)) {
      catalogName += ".yaml";
    }
    try {
      const installer = CatalogInstaller({
        'registries': registries
      });
      const itemPath = path.join(_core.ps.env.KRM_JOB_CATALOGS_PATH, catalogName);
      const basePath = path.join(_core.ps.workDir, _core.ps.env.KRM_DIR_NAME, _core.ps.env.KRM_APM_DIR_NAME, _core.ps.env.KRM_JOB_CATALOGS_PATH);
      const installedPath = (0, await installer.installCatalog(itemPath, basePath, {
        'name': alias
      }));
      if (installedPath) {
        (0, _core.print)(`Catalog installed in '${installedPath}'.`);
      } else {
        (0, _core.print)(`Catalog '${itemPath}' not found in '${registries.registryNames}'.`);
      }
    } finally {
      0, await registries.disconnect();
    }
  }
};