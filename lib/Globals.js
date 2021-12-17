import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __rootname = path.resolve(__dirname, '../');

class GLOBALS {
  static ROOT_PATH = () => {
    return __rootname;
  };

  static PROJECT_PATH = (projectName) => {
    return path.join(path.resolve(`${process.cwd()}`), projectName);
  };

  static TEMPLATE_PATH = () => {
    return path.join(__rootname, 'template');
  };
}

export default GLOBALS;
