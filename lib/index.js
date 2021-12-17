import Terminal from './Terminal.js';
import GLOBALS from './Globals.js';
import Files from './Files.js';

// INSTALL TEMPLATE FUNC
const installTemplate = async (templatePath, projectPath, projectName) => {
  const files = [
    { name: 'README.md' },
    { name: 'package.json' },
    { name: 'project.config.js' },
    { name: 'src/views/index.html' },
  ];
  // notify.progress(`creating files`);
  await Files.setTemplate(templatePath, projectPath);
  await Files.replaceName(projectPath, projectName, files);
  // notify.success(`project files created`);
};

// INSTALL DEPENDENCIES FUNC
const installDependencies = async (projectName) => {
  // notify.progress(`installing dependencies`);
  await Terminal.chdir(GLOBALS.PROJECT_PATH(projectName));
  await Terminal.run('npm install');
  // notify.success(`project dependencies installed`);
};

// FINALIZE FUNC
const finalize = async (rootPath) => {
  // notify.progress(`initializing git repository`);
  // await Terminal.chdir(path.join(rootPath));
  // await Git.gitignore();
  // await Git.init();
  // notify.success(`repo successfully initialized\n`);
};

// CREATE FUNC
const create = async (projectName) => {
  try {
    const templatePath = GLOBALS.TEMPLATE_PATH();
    const projectPath = GLOBALS.PROJECT_PATH(projectName);

    Terminal.reset();
    // const projectConfig = await Config.setup(projectName);
    await installTemplate(templatePath, projectPath, projectName);
    // await installDependencies(projectName);
    // if (projectConfig.serverPlugin)
    //   await installServer(projectPath, projectConfig.serverType, projectName);
    await finalize(projectPath);
    Terminal.reset();
  } catch (error) {
    // notify.failure(error.message);
    process.exit();
  }
};

export { create };
