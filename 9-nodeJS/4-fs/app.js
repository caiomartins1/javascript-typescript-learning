const path = require('path');
const fs = require('fs').promises;

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fullPath);

    if (/\.git/.test(fullPath)) continue;
    if (/node_modules/.test(fullPath)) continue;

    if (stats.isDirectory()) {
      readdir(fullPath);
      continue;
    }

    if (!/\.css$/.test(fullPath)) continue;

    console.log(file);
  }
}

readdir('/Users/CDM/Desktop/js-ts-studying/');
