"use strict";

var _core = require("@dogmalang/core");
const yaml = _core.dogma.use(require("yaml"));
const {
  Command
} = _core.dogma.use(require("@akromio/cli"));
const things = {
  ["env"]: {
    ["desc"]: "The environment used by the tool.",
    ["observations"]: "\n      - The prefix used for the environment variables is KRM_,\n        Akromio without vowels.\n\n      - The .env file must be located in the $KRM_DIR_NAME.\n        The secrets and cryptographic keys should be saved in $KRM_PRIVATE_ENV_FILE.\n        If you don't want to load some of these files, set its environment variable to the empty string.\n\n        The $KRM_PRIVATE_ENV_FILE should contain secrets or private keys, make sure that this is in .gitignore.\n        The secrets and private keys shouldn't be commited to a Git repo.\n\n        Every variable have the following format: name=value or name=\"value\".\n        Comments: #comment to the end of the line.\n      \n      - You can list the environment with the command 'e' or 'env' of the tool.\n    "
  }
};
const $DescCommand = class DescCommand extends Command {
  constructor(_) {
    super(_);
    /* c8 ignore start */
    if (_ == null) _ = {};
    /* c8 ignore stop */ /* c8 ignore start */
    if (_['name'] != null) (0, _core.expect)('name', _['name'], _core.list); /* c8 ignore stop */
    Object.defineProperty(this, 'name', {
      value: (0, _core.coalesce)(_['name'], ["describe <thing>", "desc"]),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['desc'] != null) (0, _core.expect)('desc', _['desc'], _core.text); /* c8 ignore stop */
    Object.defineProperty(this, 'desc', {
      value: (0, _core.coalesce)(_['desc'], "Describe a thing on akro such as, for example, an operation."),
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
    if (_['positionals'] != null) (0, _core.expect)('positionals', _['positionals'], _core.map); /* c8 ignore stop */
    Object.defineProperty(this, 'positionals', {
      value: (0, _core.coalesce)(_['positionals'], {
        ["thing"]: {
          ["choices"]: (0, _core.keys)(things),
          ["desc"]: "Thing to describe."
        }
      }),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (this._pvt_82c1246ca99af89ac0b4d48a2588e056___init__ instanceof Function) this._pvt_82c1246ca99af89ac0b4d48a2588e056___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_82c1246ca99af89ac0b4d48a2588e056___post__ instanceof Function) this._pvt_82c1246ca99af89ac0b4d48a2588e056___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_82c1246ca99af89ac0b4d48a2588e056___validate__ instanceof Function) this._pvt_82c1246ca99af89ac0b4d48a2588e056___validate__(); /* c8 ignore stop */
  }
};

const DescCommand = new Proxy($DescCommand, {
  apply(receiver, self, args) {
    return new $DescCommand(...args);
  }
});
module.exports = exports = DescCommand;
DescCommand.prototype.handle = async function (argv) {
  const self = this; /* c8 ignore next */
  _core.dogma.expect("argv", argv, _core.map);
  let {
    thing
  } = argv;
  {
    {
      const desc = _core.dogma.getItem(things, thing);
      if (desc) {
        (0, _core.print)("Name:", thing);
        (0, _core.print)("Description:", desc.desc);
        if (desc.def) {
          (0, _core.print)("Definition:");
          (0, _core.print)(desc.def);
        }
        if (desc.observations) {
          (0, _core.print)("Observations:");
          (0, _core.print)(desc.observations);
        }
        if (desc.examples) {
          (0, _core.print)("Examples:");
          (0, _core.print)(desc.examples);
        }
      }
    }
  }
};