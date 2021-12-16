#!/usr/bin/env node

// const program = require('commander');
// const { version } = require('../package.json');
// const { create } = require('../lib/');

// program.version(version).description('DevKit CLI');

// program
//   .command('create <projectName>')
//   .description('create project')
//   .action(async (projectName) => {
//     try {
//       await create(projectName);
//       // notify.success(`project ${projectName} created successfully!\n`);
//       // notify.info(`navigate to ${projectName}/client`);
//       // notify.info(`start the dev server: npm run dev:client`);
//       // notify.info(`build for deployment: npm run build`);
//     } catch (error) {
//       // notify.failure(error.message);
//       console.log(error);
//     }
//   });

import program from 'commander';
import { create } from '../lib/index.js';
import { readFile } from 'fs/promises';

const { version } = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url))
);

program.version(version).description('DevKit CLI');

program
  .command('create <projectName>')
  .description('create project')
  .action(async (projectName) => {
    try {
      await create(projectName);
      // notify.success(`project ${projectName} created successfully!\n`);
      // notify.info(`navigate to ${projectName}/client`);
      // notify.info(`start the dev server: npm run dev:client`);
      // notify.info(`build for deployment: npm run build`);
    } catch (error) {
      // notify.failure(error.message);
    }
  });

program.parse(process.argv);
