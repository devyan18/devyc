import inquirer from "inquirer";

const formatModuleName = (name: string) => {
  name = name.toLowerCase();

  // remove numbers and special characters
  name = name.replace(/[0-9]|\s/g, "");

  while (name.slice(-1) === "s") {
    name = name.slice(0, -1);
  }

  return name;
};

export default async function proptAgregateNewModule () {
  const module = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is the name of the module?"
  });

  return formatModuleName(module.name);
}
