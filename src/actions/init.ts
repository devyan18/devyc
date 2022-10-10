import inquirer from "inquirer";

export enum Projects {
  EXPRESS = "express",
  FASTIFY = "fastify",
  // REACT = "Create project for React application.",
}

export enum Languages {
  TYPESCRIPT = "typescript",
  JAVASCRIPT = "javascript",
}

enum Architectures {
  LAYERED = "layered",
  MVC = "mvc",
  HEXAGONAL = "hexagonal",
}

enum Patterns {
  REPOSITORY = "repository",
  REST = "rest",
  FACTORY = "factory",
}

export const defaultConfig = {
  framework: Projects.EXPRESS,
  arch: Architectures.MVC,
  lang: Languages.JAVASCRIPT,
  pattern: Patterns.REST,
  modules: []
};

export default async function promptInitialConfig () {
  const typeQuest = await inquirer.prompt({
    type: "list",
    name: "framework",
    message: "What framework are you using?",
    choices: Object.values(Projects)
  });

  const archQuest = await inquirer.prompt({
    type: "list",
    name: "arch",
    message: "Select the architecture you want to use",
    choices: Object.values(Architectures)
  });

  const langQuest = await inquirer.prompt({
    type: "list",
    name: "lang",
    message: "Select the language you want to use",
    choices: Object.values(Languages)
  });

  const patternQuest = await inquirer.prompt({
    type: "list",
    name: "pattern",
    message: "Select the pattern you want to use",
    choices: Object.values(Patterns)
  });

  return inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message: "Do you want to use default modules?"
  }).then(async (confirm) => {
    if (confirm) {
      const checks = await inquirer.prompt({
        type: "checkbox",
        name: "modules",
        message: "Select some modules or leave empty",
        choices: ["users", "auth", "telegram", "whatsapp"]
      });

      return {
        framework: typeQuest.framework,
        arch: archQuest.arch,
        lang: langQuest.lang,
        pattern: patternQuest.pattern,
        modules: checks.modules
      };
    }
    return {
      framework: typeQuest.framework,
      arch: archQuest.arch,
      lang: langQuest.lang,
      pattern: patternQuest.pattern,
      modules: []
    };
  });
}
