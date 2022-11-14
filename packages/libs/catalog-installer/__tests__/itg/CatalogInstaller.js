"use strict";

var _core = require("@dogmalang/core");
const os = _core.dogma.use(require("os"));
const path = _core.dogma.use(require("path"));
const fsx = _core.dogma.use(require("fs-extra"));
const {
  Registries,
  RegistryStringParser,
  RegistryBuilder
} = _core.dogma.use(require("@akromio/registry"));
const expected = _core.dogma.use(require("@akromio/expected"));
const {
  CatalogInstaller
} = _core.dogma.use(require("../.."));
suite(__filename, () => {
  {
    const tmpDir = os.tmpdir();
    const apmPath = path.join(tmpDir, ".apm");
    const catalogPath = "/jobs/catalogs";
    const builder = RegistryBuilder();
    const parser = RegistryStringParser();
    const skylink = "0001fcabbl00ibtiq4bkhemh6hdh3rlskurki3rcn2ua658j04a0gp8";
    suiteSetup(async () => {
      {
        0, await fsx.remove(apmPath);
      }
    });
    test("if catalog and dependencies exist, catalog must be installed w/ dependencies", async () => {
      {
        const defaults = {
          ["skynet"]: {
            ["portal"]: "siasky.net"
          }
        };
        const registry = builder.create(parser.parse(`apm=skynet://${skylink}`, defaults));
        const registries = (0, await Registries().appendRegistry(registry).connect());
        const installer = CatalogInstaller({
          'registries': registries
        });
        const itemPath = "/jobs/catalogs/test.yaml";
        const installPath = path.join(apmPath, catalogPath);
        const out = (0, await installer.installCatalog(itemPath, installPath));
        expected(out).equalTo(path.join(installPath, "test.yaml"));
        expected.files(out, path.join(installPath, "dir1/file.txt"), path.join(installPath, "dir2/file.txt")).toExist();
      }
    });
  }
});