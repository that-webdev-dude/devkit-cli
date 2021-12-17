import fs from 'fs';
import util from 'util';
import path from 'path';
import simpleGit from 'simple-git';

const git = simpleGit();
const writeFile = util.promisify(fs.writeFile);

class Git {
  static gitignore = async () => {
    const gitignoreContent = 'node_modules\ndist\npublic\ndevelopment\n.cache';
    try {
      await writeFile('.gitignore', gitignoreContent);
    } catch (error) {
      throw new Error('Error.Git: unable to create .gitignore file');
    }
  };

  static init = async () => {
    git.cwd(path.resolve(`${process.cwd()}`));
    try {
      await git.init();
    } catch (error) {
      throw new Error('Error.Git: unable to initalize a git repository!');
    }
  };
}

export default Git;
