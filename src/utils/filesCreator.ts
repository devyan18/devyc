import fs from "fs";
import path from "path";
import { controllerExampleJs, controllerExampleTs } from "../examples/controllers";
import { serviceExampleJs, serviceExampleTs } from "../examples/services";
import { settingsExample } from "../examples/settings";
import { entityCreator } from "../examples/interface";
import { modelCreatorJs, modelCreatorTs } from "../examples/model";
import { testExampleJs, testExampleTs } from "../examples/tests";
import { schemaExample } from "../examples/schema";
import { Languages } from "../actions/init";

export function createController (dirname: string, type: string, module: string) {
  if (type === Languages.TYPESCRIPT) {
    fs.writeFileSync(path.join(dirname, `${module}.controllers.ts`), controllerExampleTs(module));
  } else if (type === Languages.JAVASCRIPT) {
    fs.writeFileSync(path.join(dirname, `${module}.controllers.js`), controllerExampleJs(module));
  }
}

export function createService (dirname: string, type: string, module: string) {
  if (type === Languages.TYPESCRIPT) {
    fs.writeFileSync(path.join(dirname, `${module}.services.ts`), serviceExampleTs(module));
  } else if (type === Languages.JAVASCRIPT) {
    fs.writeFileSync(path.join(dirname, `${module}.services.js`), serviceExampleJs(module));
  }
}

export function createSettings (dirname: string, type: string) {
  if (type === Languages.TYPESCRIPT) {
    const localPath = path.join(dirname, "settings.ts");
    fs.existsSync(localPath) || fs.writeFileSync(localPath, settingsExample());
  } else if (type === Languages.JAVASCRIPT) {
    const localPath = path.join(dirname, "settings.js");
    fs.existsSync(localPath) || fs.writeFileSync(localPath, settingsExample());
  }
}

export function createEntity (dirname: string, type: string, module: string) {
  const localPath = path.join(dirname, `${module}.entity.ts`);

  if (type === Languages.TYPESCRIPT && !fs.existsSync(localPath)) {
    fs.writeFileSync(localPath, entityCreator(module));
  }
}

export function createModel (dirname: string, type: string, module: string) {
  if (type === Languages.TYPESCRIPT) {
    const localPath = path.join(dirname, `${module}.model.ts`);
    fs.existsSync(localPath) || fs.writeFileSync(localPath, modelCreatorTs(module));
  } else if (type === Languages.JAVASCRIPT) {
    const localPath = path.join(dirname, `${module}.model.js`);
    fs.existsSync(localPath) || fs.writeFileSync(localPath, modelCreatorJs(module));
  }
}

export function createTest (dirname: string, type: string, module: string) {
  if (type === Languages.TYPESCRIPT) {
    const localPath = path.join(dirname, `${module}.test.ts`);
    fs.existsSync(localPath) || fs.writeFileSync(localPath, testExampleTs(module));
  } else if (type === Languages.JAVASCRIPT) {
    const localPath = path.join(dirname, `${module}.test.js`);
    fs.existsSync(localPath) || fs.writeFileSync(localPath, testExampleJs(module));
  }
}

export function createSchema (dirname: string, type: string, module: string) {
  if (type === Languages.TYPESCRIPT) {
    const localPath = path.join(dirname, `${module}.schema.ts`);
    fs.existsSync(localPath) || fs.writeFileSync(localPath, schemaExample(module));
  } else if (type === Languages.JAVASCRIPT) {
    const localPath = path.join(dirname, `${module}.schema.js`);
    fs.existsSync(localPath) || fs.writeFileSync(localPath, schemaExample(module));
  }
}
