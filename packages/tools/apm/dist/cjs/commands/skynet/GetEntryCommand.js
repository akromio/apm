"use strict";

var _core = require("@dogmalang/core");
const {
  SkynetClient
} = _core.dogma.use(require("@skynetlabs/skynet-nodejs"));
const {
  Command
} = _core.dogma.use(require("@akromio/cli"));
const $GetEntryCommand = class GetEntryCommand extends Command {
  constructor(_) {
    super(_);
    /* c8 ignore start */
    if (_ == null) _ = {};
    /* c8 ignore stop */ /* c8 ignore start */
    if (_['name'] != null) (0, _core.expect)('name', _['name'], _core.list); /* c8 ignore stop */
    Object.defineProperty(this, 'name', {
      value: (0, _core.coalesce)(_['name'], ["entry [publicKey] <dataKey>", "get-entry"]),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['desc'] != null) (0, _core.expect)('desc', _['desc'], _core.text); /* c8 ignore stop */
    Object.defineProperty(this, 'desc', {
      value: (0, _core.coalesce)(_['desc'], "Show an entry of the Skynet registry."),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['positionals'] != null) (0, _core.expect)('positionals', _['positionals'], _core.map); /* c8 ignore stop */
    Object.defineProperty(this, 'positionals', {
      value: (0, _core.coalesce)(_['positionals'], {
        ["publicKey"]: {
          ["type"]: "string",
          ["desc"]: "The public key.",
          ["default"]: _core.ps.env.KRM_REGISTRY_SKYNET_PUBLIC_KEY
        },
        ["dataKey"]: {
          ["type"]: "string",
          ["desc"]: "The data key."
        }
      }),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['options'] != null) (0, _core.expect)('options', _['options'], _core.map); /* c8 ignore stop */
    Object.defineProperty(this, 'options', {
      value: (0, _core.coalesce)(_['options'], {}),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (this._pvt_b7ae5ea2a4792f49f1bda3860201618a___init__ instanceof Function) this._pvt_b7ae5ea2a4792f49f1bda3860201618a___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_b7ae5ea2a4792f49f1bda3860201618a___post__ instanceof Function) this._pvt_b7ae5ea2a4792f49f1bda3860201618a___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_b7ae5ea2a4792f49f1bda3860201618a___validate__ instanceof Function) this._pvt_b7ae5ea2a4792f49f1bda3860201618a___validate__(); /* c8 ignore stop */
  }
};

const GetEntryCommand = new Proxy($GetEntryCommand, {
  apply(receiver, self, args) {
    return new $GetEntryCommand(...args);
  }
});
module.exports = exports = GetEntryCommand;
GetEntryCommand.prototype.handle = async function (argv) {
  const self = this; /* c8 ignore next */
  _core.dogma.expect("argv", argv, _core.map);
  let {
    publicKey,
    dataKey
  } = argv;
  {
    if (!publicKey) {
      (0, _core.print)("Public key expected. Not passed and env var unset.");
      _core.ps.exit(1);
    }
    const portal = _core.ps.env.KRM_REGISTRY_SKYNET_PORTAL;
    const skynet = new SkynetClient(portal);
    const decoder = new TextDecoder();
    const {
      entry
    } = (0, await skynet.registry.getEntry(publicKey, dataKey));
    (0, _core.printf)(_core.dogma.clone(entry, {
      "data": decoder.decode(entry.data)
    }, {}, [], []));
  }
};