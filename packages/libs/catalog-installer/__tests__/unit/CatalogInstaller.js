"use strict";

var _core = require("@dogmalang/core");
const os = _core.dogma.use(require("os"));
const path = _core.dogma.use(require("path"));
const expected = _core.dogma.use(require("@akromio/expected"));
const {
  monitor,
  simulator,
  method
} = _core.dogma.use(require("@akromio/doubles"));
const {
  Registries,
  Registry
} = _core.dogma.use(require("@akromio/registry"));
const {
  CatalogInstaller
} = _core.dogma.use(require("../.."));
suite(__filename, () => {
  {
    const tmpDir = os.tmpdir();
    const apmPath = path.join(tmpDir, ".apm");
    const catalogPath = "/jobs/catalogs";
    const basePath = path.join(apmPath, catalogPath);
    suite("installCatalog()", () => {
      {
        teardown(() => {
          {
            monitor.clearAll();
          }
        });
        test("when catalog unexists, nil must be returned", async () => {
          {
            const registries = simulator(Registries, {
              'getItem': method({
                'resolves': null
              })
            });
            const installer = CatalogInstaller({
              'registries': registries
            });
            const itemPath = "/empty.yaml";
            const out = (0, await installer.installCatalog(itemPath, basePath));
            expected(out).toBeNil();
          }
        });
        test("when alias indicated, catalog must be installed with that name", async () => {
          {
            const declItem = {
              ["registryName"]: "apm",
              ["name"]: "/jobs/catalogs/empty.yaml",
              ["uri"]: "apm:///jobs/catalogs/empty.yaml",
              ["cty"]: "text/yaml",
              ["value"]: "spec: v1.0\ndesc: A test catalog.\njobs: []"
            };
            const getItem = monitor(method({
              'resolves': declItem
            }));
            const registries = simulator(Registries, {
              'getItem': getItem
            });
            const installer = CatalogInstaller({
              'registries': registries
            });
            const itemPath = "/jobs/catalogs/empty.yaml";
            const opts = {
              ["name"]: "alias.yaml"
            };
            const out = (0, await installer.installCatalog(itemPath, basePath, opts));
            expected(out).equalTo(path.join(basePath, "/alias.yaml"));
            const log = monitor.log(getItem);
            expected(log.calls).equalTo(1);
            expected(log.calledWith([itemPath, opts])).equalTo(1);
          }
        });
      }
    });
  }
});