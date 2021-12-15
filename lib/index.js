const path = require('path');

// GLOBAL VARIABLES
const root = path.resolve(__dirname, '../');
const GLOBALS = {
  ROOT_PATH: () => root,
  TEMPLATE_PATH: () => path.join(root, 'template'),
  PROJECT_PATH: (projectName) =>
    path.join(path.resolve(`${process.cwd()}`), projectName),
};

// INSTALL CLIENT
const installClient = async (templatePath, projectPath, projectName) => {
  // const files = [
  //   { name: 'README.md' },
  //   { name: 'client/package.json' },
  //   { name: 'client/package-lock.json' },
  //   { name: 'client/src/views/index.html' },
  // ];
  // notify.progress(`creating files`);
  // await Files.setTemplate(templatePath, projectPath);
  // await Files.replaceName(projectPath, projectName, files);
  // notify.success(`project files created`);

  // notify.progress(`installing dependencies`);
  // await Terminal.chdir(Globals.TEMPLATE_CLIENT_PATH());
  // await Terminal.run('npm install');
  // notify.success(`project dependencies installed`);
  console.log('installing client');
};

const finalize = async (rootPath) => {
  // notify.progress(`initializing git repository`);
  // await Terminal.chdir(path.join(rootPath));
  // await Git.gitignore();
  // await Git.init();
  // notify.success(`repo successfully initialized\n`);
  console.log('finalizing');
};

// CREATE FUNC
const create = async (projectName) => {
  try {
    // Terminal.reset();
    const templatePath = GLOBALS.TEMPLATE_PATH();
    const projectPath = GLOBALS.PROJECT_PATH(projectName);
    // const projectConfig = await Config.setup(projectName);
    // await installClient(templatePath, projectPath, projectName);
    // if (projectConfig.serverPlugin)
    //   await installServer(projectPath, projectConfig.serverType, projectName);
    // await finalize(projectPath);
    // Terminal.reset();
    console.log(templatePath);
    console.log(projectPath);
  } catch (error) {
    // notify.failure(error.message);
    // process.exit();
  }
};

module.exports = {
  create,
};
