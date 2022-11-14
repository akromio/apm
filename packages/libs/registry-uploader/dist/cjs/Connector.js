"use strict";

var _core = require("@dogmalang/core");
const Connector = _core.dogma.intf('Connector', {
  connect: {
    optional: false,
    type: _core.func
  },
  disconnect: {
    optional: false,
    type: _core.func
  },
  uploadRegistry: {
    optional: false,
    type: _core.func
  }
});
module.exports = exports = Connector;