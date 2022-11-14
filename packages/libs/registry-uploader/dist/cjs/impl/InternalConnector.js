"use strict";

var _core = require("@dogmalang/core");
const path = _core.dogma.use(require("path"));
const $InternalConnect = class InternalConnect {
  constructor(_) {
    /* c8 ignore start */if (_ == null) _ = {};
    /* c8 ignore stop */ /* c8 ignore start */
    if (this._pvt_8f9a6cd866b4d426ab939754e8abd441___init__ instanceof Function) this._pvt_8f9a6cd866b4d426ab939754e8abd441___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_8f9a6cd866b4d426ab939754e8abd441___post__ instanceof Function) this._pvt_8f9a6cd866b4d426ab939754e8abd441___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_8f9a6cd866b4d426ab939754e8abd441___validate__ instanceof Function) this._pvt_8f9a6cd866b4d426ab939754e8abd441___validate__(); /* c8 ignore stop */
  }
};

const InternalConnect = new Proxy($InternalConnect, {
  /* c8 ignore start */apply(receiver, self, args) {
    throw "'InternalConnect' is abstract.";
  } /* c8 ignore stop */
});
module.exports = exports = InternalConnect;
InternalConnect.prototype.connect = function () {
  const self = this;
  {}
  return this;
};
InternalConnect.prototype.disconnect = function () {
  const self = this;
  {}
  return this;
};