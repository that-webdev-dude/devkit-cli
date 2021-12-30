#!/usr/bin/env node

import program from 'commander';
import { notify } from '../lib/Notify.js';
import { create } from '../lib/index.js';
import { readFile } from 'fs/promises';

/** IMPORT */
import pkg from 'inquirer';
const { prompt } = pkg;
/** IMPORT END */

/** CONFIG */
class Config {
  static setup = (projectName) => {
    const questions = [
      // {
      //   type: 'confirm',
      //   name: 'serverPlugin',
      //   message: `Will you use a server for ${projectName}?`,
      // },
      {
        type: 'list',
        name: 'workflow',
        message: `What type of workflow are you going to use?`,
        choices: ['javascript', 'typescript'],
        filter: function (val) {
          return val.toLowerCase();
        },
      },
    ];
    return prompt(questions);
  };
}
/** CONFIG END */

const { version } = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url))
);

program.version(version).description('DevKit CLI');

program
  .command('create <projectName>')
  .description('create project')
  .action(async (projectName) => {
    try {
      const test = await Config.setup(projectName);
      console.log('DEBUG ~ test', test);

      // await create(projectName);
      // notify.success(`project ${projectName} created successfully!\n`);
      // notify.info(`navigate to ${projectName}`);
      // notify.info(`start the dev server: npm run start`);
      // notify.info(`build for deployment: npm run build`);
    } catch (error) {
      notify.failure(error.message);
    }
  });

program.parse(process.argv);
