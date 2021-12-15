#!/usr/bin/env node

// const create = require('../lib/Create');
// const notify = require('../lib/Notify');
const program = require('commander');
const { version } = require('../package.json');

program.version(version).description('DevKit CLI');

program
  .command('create <projectName>')
  .description('create project')
  .action(async (projectName) => {
    try {
      // await create(projectName);
      // notify.success(`project ${projectName} created successfully!\n`);
      // notify.info(`navigate to ${projectName}/client`);
      // notify.info(`start the dev server: npm run dev:client`);
      // notify.info(`build for deployment: npm run build`);
      console.log('all good!');
    } catch (error) {
      // notify.failure(error.message);
      console.log(error);
    }
  });

program.parse(process.argv);
