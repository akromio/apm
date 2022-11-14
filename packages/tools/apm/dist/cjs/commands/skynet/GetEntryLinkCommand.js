"use strict";

var _core = require("@dogmalang/core");
const {
  getEntryLink
} = _core.dogma.use(require("@skynetlabs/skynet-nodejs"));
const {
  Command
} = _core.dogma.use(require("@akromio/cli"));
const $GetLinkCommand = class GetLinkCommand extends Command {
  constructor(_) {
    super(_);
    /* c8 ignore start */
    if (_ == null) _ = {};
    /* c8 ignore stop */ /* c8 ignore start */
    if (_['name'] != null) (0, _core.expect)('name', _['name'], _core.list); /* c8 ignore stop */
    Object.defineProperty(this, 'name', {
      value: (0, _core.coalesce)(_['name'], ["link [publicKey] <dataKey>", "get-entry-link"]),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['desc'] != null) (0, _core.expect)('desc', _['desc'], _core.text); /* c8 ignore stop */
    Object.defineProperty(this, 'desc', {
      value: (0, _core.coalesce)(_['desc'], "Show the skylink for a Skynet registry entry."),
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
    if (this._pvt_48a2ee95fb4d5ee58010fbf65e78606a___init__ instanceof Function) this._pvt_48a2ee95fb4d5ee58010fbf65e78606a___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_48a2ee95fb4d5ee58010fbf65e78606a___post__ instanceof Function) this._pvt_48a2ee95fb4d5ee58010fbf65e78606a___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_48a2ee95fb4d5ee58010fbf65e78606a___validate__ instanceof Function) this._pvt_48a2ee95fb4d5ee58010fbf65e78606a___validate__(); /* c8 ignore stop */
  }
};

const GetLinkCommand = new Proxy($GetLinkCommand, {
  apply(receiver, self, args) {
    return new $GetLinkCommand(...args);
  }
});
module.exports = exports = GetLinkCommand;
GetLinkCommand.prototype.handle = async function (argv) {
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
    (0, _core.print)(getEntryLink(publicKey, dataKey));
  }
};