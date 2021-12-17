// import { isString } from 'typeis.js';
import typeis from 'typeis.js';
import clear from 'clear';
import fse from 'fs-extra';
import { exec as exe } from 'child_process';
import chalk from 'chalk';
import figlet from 'figlet';

const { isString } = typeis;

class Terminal {
  static banner = () => {
    console.log(chalk.yellow(figlet.textSync('Devkit', 'Chunky')));
  };

  static clear = () => clear();

  static reset = () => {
    this.clear();
    this.banner();
  };

  static chdir = (destPath) => {
    return new Promise((resolve, reject) => {
      if (fse.existsSync(destPath)) {
        process.chdir(destPath);
        resolve(true);
      } else {
        reject(new Error(`Error - cli.chdir: Unable to find ${destPath}`));
      }
    });
  };

  static run = (command = '') => {
    return new Promise((resolve, reject) => {
      if (isString(command) && command.length > 0) {
        exe(command, function (err) {
          if (err) {
            reject(new Error(`Error - cli.run: Failed to run "${command}"`));
          } else {
            resolve(true);
          }
        });
      }
    });
  };
}

export default Terminal;
