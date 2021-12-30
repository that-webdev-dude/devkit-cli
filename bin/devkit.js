#!/usr/bin/env node

import program from 'commander';
import { notify } from '../lib/Notify.js';
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
      notify.success(`project ${projectName} created successfully!\n`);
      notify.info(`navigate to ${projectName}`);
      notify.info(`start the dev server: npm run start`);
      notify.info(`build for deployment: npm run build`);
    } catch (error) {
      notify.failure(error.message);
    }
  });

program.parse(process.argv);
