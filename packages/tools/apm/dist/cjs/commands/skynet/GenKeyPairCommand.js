"use strict";

var _core = require("@dogmalang/core");
const path = _core.dogma.use(require("path"));
const fs = _core.dogma.use(require("fs/promises"));
const {
  genKeyPairFromSeed,
  genKeyPairAndSeed
} = _core.dogma.use(require("@skynetlabs/skynet-nodejs"));
const {
  Command
} = _core.dogma.use(require("@akromio/cli"));
const $GenKeyPairCommand = class GenKeyPairCommand extends Command {
  constructor(_) {
    super(_);
    /* c8 ignore start */
    if (_ == null) _ = {};
    /* c8 ignore stop */ /* c8 ignore start */
    if (_['name'] != null) (0, _core.expect)('name', _['name'], _core.list); /* c8 ignore stop */
    Object.defineProperty(this, 'name', {
      value: (0, _core.coalesce)(_['name'], ["genKeyPair", "gkp"]),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['desc'] != null) (0, _core.expect)('desc', _['desc'], _core.text); /* c8 ignore stop */
    Object.defineProperty(this, 'desc', {
      value: (0, _core.coalesce)(_['desc'], "Generate a key pair."),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['positionals'] != null) (0, _core.expect)('positionals', _['positionals'], _core.map); /* c8 ignore stop */
    Object.defineProperty(this, 'positionals', {
      value: (0, _core.coalesce)(_['positionals'], {}),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (_['options'] != null) (0, _core.expect)('options', _['options'], _core.map); /* c8 ignore stop */
    Object.defineProperty(this, 'options', {
      value: (0, _core.coalesce)(_['options'], {
        ["filePath"]: {
          ["type"]: "string",
          ["alias"]: ["o", "out"],
          ["desc"]: "File path where to save the key pair generated.",
          ["default"]: path.join(_core.ps.env.KRM_DIR_NAME, _core.ps.env.KRM_PRIVATE_ENV_FILE)
        },
        ["tty"]: {
          ["type"]: "boolean",
          ["alias"]: ["t"],
          ["desc"]: "Not to disk, show in the terminal.",
          ["default"]: false
        },
        ["force"]: {
          ["type"]: "boolean",
          ["alias"]: ["f"],
          ["desc"]: "Overwrite out file if it exists.",
          ["default"]: false
        },
        ["seed"]: {
          ["type"]: "string",
          ["alias"]: ["s"],
          ["desc"]: "The seed to use."
        }
      }),
      writable: false,
      enumerable: true
    });
    /* c8 ignore start */
    if (this._pvt_a30a500b3c54bd7ab2d670d7086c04c6___init__ instanceof Function) this._pvt_a30a500b3c54bd7ab2d670d7086c04c6___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_a30a500b3c54bd7ab2d670d7086c04c6___post__ instanceof Function) this._pvt_a30a500b3c54bd7ab2d670d7086c04c6___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_a30a500b3c54bd7ab2d670d7086c04c6___validate__ instanceof Function) this._pvt_a30a500b3c54bd7ab2d670d7086c04c6___validate__(); /* c8 ignore stop */
  }
};

const GenKeyPairCommand = new Proxy($GenKeyPairCommand, {
  apply(receiver, self, args) {
    return new $GenKeyPairCommand(...args);
  }
});
module.exports = exports = GenKeyPairCommand;
GenKeyPairCommand.prototype.handle = async function (argv) {
  const self = this; /* c8 ignore next */
  _core.dogma.expect("argv", argv, _core.map);
  let {
    seed,
    filePath,
    force,
    tty
  } = argv;
  {
    const keyPair = seed ? genKeyPairFromSeed(seed) : genKeyPairAndSeed();
    let output = `KRM_REGISTRY_SKYNET_PUBLIC_KEY=${keyPair.publicKey}
`;
    output += `KRM_REGISTRY_SKYNET_PRIVATE_KEY=${keyPair.privateKey}
`;
    if (keyPair.seed) {
      output += `#seed=${keyPair.seed}
`;
    }
    if (tty) {
      (0, _core.print)(output);
    } else {
      {
        const [ok] = await _core.dogma.pawait(() => fs.access(filePath));
        if (ok && !force) {
          (0, _core.print)(`File already exists: ${filePath}. Use -f or --force to overwrite it.`);
          _core.ps.exit(1);
        }
      }
      0, await fs.writeFile(filePath, output);
      (0, _core.print)(`Key pair generated and saved in '${filePath}'.`);
    }
  }
};