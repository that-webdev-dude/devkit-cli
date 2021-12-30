import { notify } from './Notify.js';
import Terminal from './Terminal.js';
import GLOBALS from './Globals.js';
import Files from './Files.js';
import Git from './Git.js';

// INSTALL TEMPLATE FUNC
const install = async (templatePath, projectPath, projectName) => {
  const files = [
    { name: 'README.md' },
    { name: 'package.json' },
    { name: 'project.config.js' },
    { name: 'src/views/index.html' },
  ];
  notify.progress(`creating files`);
  await Files.setTemplate(templatePath, projectPath);
  await Files.replaceName(projectPath, projectName, files);
  notify.success(`project files created`);
};

// INSTALL DEPENDENCIES FUNC
const finalize = async (projectName) => {
  notify.progress(`installing dependencies`);
  await Terminal.chdir(GLOBALS.PROJECT_PATH(projectName));
  await Terminal.run('npm install');
  notify.success(`project dependencies installed`);

  notify.progress(`initializing git repository`);
  await Git.gitignore();
  await Git.init();
  notify.success(`repo successfully initialized\n`);
};

// CREATE FUNC
const create = async (projectName) => {
  try {
    const templatePath = GLOBALS.TEMPLATE_PATH();
    const projectPath = GLOBALS.PROJECT_PATH(projectName);

    Terminal.reset();
    await install(templatePath, projectPath, projectName);
    // await finalize(projectName);
    Terminal.reset();
  } catch (error) {
    notify.failure(error.message);
    process.exit();
  }
};

export { create };
