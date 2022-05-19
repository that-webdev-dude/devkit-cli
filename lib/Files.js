/** Files.js */

import path from "path";
import fse from "fs-extra";
import replace from "replace-in-file";

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
    const target = "--project-name--";
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

export default Files;
