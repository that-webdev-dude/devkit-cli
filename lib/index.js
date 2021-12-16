const path = require('path');
const replace = require('replace-in-file');
const fse = require('fs-extra');

// GLOBAL VARIABLES
const root = path.resolve(__dirname, '../');
const GLOBALS = {
  ROOT_PATH: () => root,
  TEMPLATE_PATH: () => path.join(root, 'template'),
  PROJECT_PATH: (projectName) =>
    path.join(path.resolve(`${process.cwd()}`), projectName),
};

// FILES API
class Files {
  static setTemplate = async (srcPath, destPath) => {
    if (!fse.pathExistsSync(srcPath))
      throw new Error(`Source path does not exist!`);
    try {
      await fse.copy(srcPath, destPath);
    } catch (err) {
      throw new Error(`Unable to copy the files in ${destPath}`);
    }
  };

  static replaceName = async (destPath, projectName, files) => {
    const target = '--project-name--';
    try {
      await replace({
        files: files.map((file) => {
          return path.resolve(`${destPath}/${file.name}`);
        }),
        from: target,
        to: projectName.toLowerCase(),
      });
    } catch (error) {
      throw new Error(`Unable to set name "${projectName}"`);
    }
  };
}

// INSTALL CLIENT
const installClient = async (templatePath, projectPath, projectName) => {
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

  // notify.progress(`installing dependencies`);
  // await Terminal.chdir(Globals.TEMPLATE_CLIENT_PATH());
  // await Terminal.run('npm install');
  // notify.success(`project dependencies installed`);
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
    await installClient(templatePath, projectPath, projectName);
    // if (projectConfig.serverPlugin)
    //   await installServer(projectPath, projectConfig.serverType, projectName);
    // await finalize(projectPath);
    // Terminal.reset();
  } catch (error) {
    // notify.failure(error.message);
    process.exit();
  }
};

module.exports = {
  create,
};
