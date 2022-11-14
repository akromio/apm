"use strict";

var _core = require("@dogmalang/core");
const {
  EnvCommand: EnvCommandBase
} = _core.dogma.use(require("@akromio/cli"));
const prefix = "KRM_";
const $EnvCommand = class EnvCommand extends EnvCommandBase {
  constructor(_) {
    super(_);
    /* c8 ignore start */
    if (_ == null) _ = {};
    /* c8 ignore stop */ /* c8 ignore start */
    if (this._pvt_bb53fae7674a8c3fa0fe97d55a27790f___init__ instanceof Function) this._pvt_bb53fae7674a8c3fa0fe97d55a27790f___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_bb53fae7674a8c3fa0fe97d55a27790f___post__ instanceof Function) this._pvt_bb53fae7674a8c3fa0fe97d55a27790f___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_bb53fae7674a8c3fa0fe97d55a27790f___validate__ instanceof Function) this._pvt_bb53fae7674a8c3fa0fe97d55a27790f___validate__(); /* c8 ignore stop */
  }
};

const EnvCommand = new Proxy($EnvCommand, {
  apply(receiver, self, args) {
    return new $EnvCommand(...args);
  }
});
module.exports = exports = EnvCommand;
EnvCommand.prototype.buildRows = function () {
  const self = this;
  let rows = [];
  {
    const vars = {
      ["DIR_NAME"]: {
        ["desc"]: "The local dir name where the akromio data is."
      },
      ["ENV_FILE"]: {
        ["desc"]: "The .env file to load when started. Relative to $DIR_NAME."
      },
      ["PRIVATE_ENV_FILE"]: {
        ["desc"]: "The .private.env file to load when started. Relative to $DIRNAME."
      },
      ["APM_DIR_NAME"]: {
        ["desc"]: "The local dir name where apm install the catalogs."
      },
      ["JOB_CATALOGS_PATH"]: {
        ["desc"]: "The dir path to prefix when root job catalog name is relative."
      },
      ["REGISTRIES"]: {
        ["desc"]: "The available registries to use in order, separated by commas."
      },
      ["REGISTRY_SKYNET_PORTAL"]: {
        ["desc"]: "The Skynet portal (w/o https://) to use when unset."
      },
      ["REGISTRY_SKYNET_SKYLINK"]: {
        ["desc"]: "The skylink to use when unset."
      },
      ["REGISTRY_SKYNET_PRIVATE_KEY"]: {
        ["desc"]: "The private key to use for setting entries of the Skynet registry.",
        ["password"]: true
      },
      ["REGISTRY_SKYNET_PUBLIC_KEY"]: {
        ["desc"]: "The public key to use for getting entries from the Skynet registry."
      }
    };
    rows = [["Variable", "Value", "Desc."]];
    for (let [name, item] of Object.entries(vars)) {
      {
        var _dogma$getItem;
        name = prefix + name;
        let value = (_dogma$getItem = _core.dogma.getItem(_core.ps.env, name)) !== null && _dogma$getItem !== void 0 ? _dogma$getItem : "";
        if (item.password && value) {
          value = "*****";
        }
        rows.push([name, value, item.desc]);
      }
    }
  }
  return rows;
};