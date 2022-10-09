# DEVYC

DEVYC is a `cli` to quickly start new projects, currently it only allows to create a set of folders and files with a `clean architecture` based design pattern using `express` but soon it will allow to use both `mvc` and `mvvm`, which are currently widely used.

> The above is only for the server side, we are working to extend this tool also for client side patterns with the most used tools, (`React`, `Vue`, `Angular`, etc). 

#### Quick Start

##### To start using "devyc" it is first recommended to install the library globally.

```
npm install -g devyc
```


##### To start a project with DEVYC you can use the command::

```
devyc init
```
Or to start the project with default values:

```
npm devyc init -y
```

A file named `devy.json` will be created in the directory with the following structure:

```json
{
  "type": "express",
  "dir": "./",
  "architecture": "clean",
  "typescript": true,
  "modules": []
}
```

We can manually add project modules directly in the "modules" property.

> 

```json
{
  "modules": [
    "person",
    "career",
    "other"
  ]
}
```
Or use
```
npm devyc add 
```
&&

```
? What is the name of the module? "moduleName"
```

> The differences between using `devyc add` or manually adding the module in the `devy.json` is that if you add it manually you will have to use the `devyc create` command to create the folders and files of the modules that have been added manually.