import inquirer from "inquirer";

export enum Projects {
  Express = "Create project for Node/Express API",
  React = "Create project for React application.",
}

enum Commands {
  CLEAN = "clean",
  // MVC = "mvc",
  // MVVM = "mvvm",
}

enum Languages {
  TYPESCRIPT = "typescript",
  JAVASCRIPT = "javascript",
}

export const defaultConfig = {
  type: Projects.Express,
  arch: Commands.CLEAN,
  lang: true
};

export default async function promptInitialConfig () {
  const typeQuest = await inquirer.prompt({
    type: "list",
    name: "type",
    message: "What would you like to create?",
    choices: Object.values(Projects)
  });

  const archQuest = await inquirer.prompt({
    type: "list",
    name: "arch",
    message: "Select the architecture you want to use",
    choices: Object.values(Commands)
  });

  const langQuest = await inquirer.prompt({
    type: "list",
    name: "lang",
    message: "Select the language you want to use",
    choices: Object.values(Languages)
  });

  return {
    type: typeQuest.type,
    arch: archQuest.arch,
    lang: langQuest.lang === "typescript"
  };
}
