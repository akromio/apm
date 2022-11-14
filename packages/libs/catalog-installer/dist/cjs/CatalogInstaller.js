"use strict";

var _core = require("@dogmalang/core");
const yaml = _core.dogma.use(require("yaml"));
const path = _core.dogma.use(require("path"));
const fs = _core.dogma.use(require("fs/promises"));
const fsx = _core.dogma.use(require("fs-extra"));
const $CatalogInstaller = class CatalogInstaller {
  constructor(_) {
    /* c8 ignore start */if (_ == null) _ = {};
    /* c8 ignore stop */
    (0, _core.expect)('registries', _['registries'], null);
    Object.defineProperty(this, 'registries', {
      value: (0, _core.coalesce)(_['registries'], null),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (this._pvt_7b7d956d9b1138b3cf886cf8905f4db7___init__ instanceof Function) this._pvt_7b7d956d9b1138b3cf886cf8905f4db7___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_7b7d956d9b1138b3cf886cf8905f4db7___post__ instanceof Function) this._pvt_7b7d956d9b1138b3cf886cf8905f4db7___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_7b7d956d9b1138b3cf886cf8905f4db7___validate__ instanceof Function) this._pvt_7b7d956d9b1138b3cf886cf8905f4db7___validate__(); /* c8 ignore stop */
  }
};

const CatalogInstaller = new Proxy($CatalogInstaller, {
  apply(receiver, self, args) {
    return new $CatalogInstaller(...args);
  }
});
module.exports = exports = CatalogInstaller;
CatalogInstaller.prototype.installCatalog = async function (itemPath, basePath, opts) {
  const self = this;
  let installPath = ""; /* c8 ignore next */
  _core.dogma.expect("itemPath", itemPath, _core.text); /* c8 ignore next */
  _core.dogma.expect("basePath", basePath, _core.text); /* c8 ignore next */
  if (opts != null) _core.dogma.expect("opts", opts, _core.dogma.intf("inline", {
    name: {
      optional: true,
      type: _core.text
    },
    registryName: {
      optional: true,
      type: _core.text
    }
  }));
  {
    const item = (0, await this.registries.getItem(itemPath, opts));
    let decl;
    if (!item) {
      return;
    }
    decl = _core.dogma.clone(yaml.parse((0, _core.text)(item.value)), {
      "__installed": (0, _core.timestamp)(),
      "__registry": item.registryName,
      "__path": item.name
    }, {}, [], []);
    const catalogName = (opts != null ? opts.name : null) || path.basename(itemPath);
    installPath = path.join(basePath, catalogName);
    0, await fsx.ensureDir(path.dirname(installPath));
    0, await fs.writeFile(installPath, yaml.stringify(decl), "utf8");
    if (_core.dogma.is(decl.localDependencies, _core.list)) {
      0, await this.installLocalDependencies(decl, path.dirname(installPath), item.registryName);
    }
  }
  return installPath;
};
CatalogInstaller.prototype.installLocalDependencies = async function (decl, installPath, registryName) {
  const self = this; /* c8 ignore next */
  _core.dogma.expect("decl", decl, _core.map); /* c8 ignore next */
  _core.dogma.expect("installPath", installPath, _core.text); /* c8 ignore next */
  _core.dogma.expect("registryName", registryName, _core.text);
  {
    const basePath = path.dirname(decl.__path);
    const registry = this.registries.getRegistry(registryName);
    for (const dep of decl.localDependencies) {
      /*c8 ignore next*/_core.dogma.expect('dep', dep, _core.text);
      const itemPath = path.join(basePath, dep);
      const localPath = path.join(installPath, dep);
      0, await registry.downloadItem(itemPath, localPath, {
        'unzip': true,
        'overwrite': true
      });
    }
  }
};