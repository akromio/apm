"use strict";

var _core = require("@dogmalang/core");
const RegistryUploader = _core.dogma.use(require("./RegistryUploader"));
const $RegistryUploaderBuilder = class RegistryUploaderBuilder {
  constructor(_) {
    /* c8 ignore start */if (_ == null) _ = {};
    /* c8 ignore stop */ /* c8 ignore start */
    if (this._pvt_2cf6ccca332969fd53a480c395fcfbc1___init__ instanceof Function) this._pvt_2cf6ccca332969fd53a480c395fcfbc1___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_2cf6ccca332969fd53a480c395fcfbc1___post__ instanceof Function) this._pvt_2cf6ccca332969fd53a480c395fcfbc1___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_2cf6ccca332969fd53a480c395fcfbc1___validate__ instanceof Function) this._pvt_2cf6ccca332969fd53a480c395fcfbc1___validate__(); /* c8 ignore stop */
  }
};

const RegistryUploaderBuilder = new Proxy($RegistryUploaderBuilder, {
  apply(receiver, self, args) {
    return new $RegistryUploaderBuilder(...args);
  }
});
module.exports = exports = RegistryUploaderBuilder;
RegistryUploaderBuilder.prototype.create = function (decl) {
  const self = this;
  let uploader; /* c8 ignore next */
  _core.dogma.expect("decl", decl, _core.map);
  {
    let conn;
    {
      const kind = decl.impl;
      switch (kind) {
        case "skynet":
          {
            conn = createSkynetConnector(decl);
          } /* c8 ignore start */
          break;
        /* c8 ignore stop */ /*c8 ignore next*/
        default:
          {
            _core.dogma.raise(TypeError(`Unknown connector: ${kind}.`));
          }
      }
    }
    uploader = RegistryUploader(_core.dogma.clone(decl, {
      "client": conn
    }, {}, [], []));
  }
  return uploader;
};
function createSkynetConnector(decl) {
  let conn; /* c8 ignore next */
  _core.dogma.expect("decl", decl, _core.map);
  {
    const {
      SkynetClient
    } = _core.dogma.use(require("@skynetlabs/skynet-nodejs"));
    const portal = `https://${decl.portal}`;
    const client = new SkynetClient(portal);
    conn = _core.dogma.use(require("./impl/skynet/SkynetConnector"))(_core.dogma.clone(decl, {
      "client": client
    }, {}, [], []));
  }
  return conn;
}