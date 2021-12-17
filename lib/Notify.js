import chalk from 'chalk';
import ora from 'ora';

const spinner = ora();

class Notify {
  constructor() {
    this.instance = chalk['white']['visible'];
    this.spinner = spinner;
    this.colors = {
      progress: 'white',
      warning: 'yellow',
      success: 'green',
      failure: 'red',
      info: 'blue',
    };
  }

  set(options) {
    const { message = 'message', style = 'visible', color = 'white' } = options;
    this.instance = chalk[color][style];
    return this.instance(message);
  }

  progress(message = 'message', style = 'visible') {
    const { progress: color } = this.colors;
    this.spinner.text = this.set({ message, style, color });
    this.spinner.start();
  }

  warning(message = 'message', style = 'visible') {
    const { warning: color } = this.colors;
    this.spinner.text = this.set({ message, style, color });
    this.spinner.warn();
  }

  success(message = 'message', style = 'visible') {
    const { success: color } = this.colors;
    this.spinner.text = this.set({ message, style, color });
    this.spinner.succeed();
  }

  failure(message = 'message', style = 'visible') {
    const { failure: color } = this.colors;
    this.spinner.text = this.set({ message, style, color });
    this.spinner.fail();
  }

  info(message = 'message', style = 'visible') {
    const { info: color } = this.colors;
    this.spinner.text = this.set({ message, style, color });
    this.spinner.info();
  }
}

const notify = new Notify();

export { notify };
