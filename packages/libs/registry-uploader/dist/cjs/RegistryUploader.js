"use strict";

var _core = require("@dogmalang/core");
const Connector = _core.dogma.use(require("./Connector"));
const $RegistryUploader = class RegistryUploader {
  constructor(_) {
    /* c8 ignore start */if (_ == null) _ = {};
    /* c8 ignore stop */
    (0, _core.expect)('client', _['client'], Connector);
    Object.defineProperty(this, 'client', {
      value: (0, _core.coalesce)(_['client'], null),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (this._pvt_04f74295961cb0ac016b18cda18a0a31___init__ instanceof Function) this._pvt_04f74295961cb0ac016b18cda18a0a31___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_04f74295961cb0ac016b18cda18a0a31___post__ instanceof Function) this._pvt_04f74295961cb0ac016b18cda18a0a31___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_04f74295961cb0ac016b18cda18a0a31___validate__ instanceof Function) this._pvt_04f74295961cb0ac016b18cda18a0a31___validate__(); /* c8 ignore stop */
  }
};

const RegistryUploader = new Proxy($RegistryUploader, {
  apply(receiver, self, args) {
    return new $RegistryUploader(...args);
  }
});
module.exports = exports = RegistryUploader;
RegistryUploader.prototype.connect = async function () {
  const self = this;
  {
    0, await this.client.connect();
  }
  return this;
};
RegistryUploader.prototype.disconnect = async function () {
  const self = this;
  {
    0, await this.client.disconnect();
  }
  return this;
};
RegistryUploader.prototype.uploadRegistry = function (dirPath) {
  const self = this; /* c8 ignore next */
  _core.dogma.expect("dirPath", dirPath, _core.text);
  {
    return this.client.uploadRegistry(dirPath);
  }
};