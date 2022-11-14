"use strict";

var _core = require("@dogmalang/core");
const {
  SkynetClient
} = _core.dogma.use(require("@skynetlabs/skynet-nodejs"));
const InternalConnector = _core.dogma.use(require("../InternalConnector"));
const $SkynetConnector = class SkynetConnector extends InternalConnector {
  constructor(_) {
    super(_);
    /* c8 ignore start */
    if (_ == null) _ = {};
    /* c8 ignore stop */
    (0, _core.expect)('client', _['client'], SkynetClient);
    Object.defineProperty(this, 'client', {
      value: (0, _core.coalesce)(_['client'], null),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (this._pvt_5af8b1be2d29f2977d29f2e2121af21c___init__ instanceof Function) this._pvt_5af8b1be2d29f2977d29f2e2121af21c___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_5af8b1be2d29f2977d29f2e2121af21c___post__ instanceof Function) this._pvt_5af8b1be2d29f2977d29f2e2121af21c___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_5af8b1be2d29f2977d29f2e2121af21c___validate__ instanceof Function) this._pvt_5af8b1be2d29f2977d29f2e2121af21c___validate__(); /* c8 ignore stop */
  }
};

const SkynetConnector = new Proxy($SkynetConnector, {
  apply(receiver, self, args) {
    return new $SkynetConnector(...args);
  }
});
module.exports = exports = SkynetConnector;
SkynetConnector.prototype.uploadRegistry = function (dirPath) {
  const self = this; /* c8 ignore next */
  _core.dogma.expect("dirPath", dirPath, _core.text);
  {
    return this.client.uploadDirectory(dirPath);
  }
};