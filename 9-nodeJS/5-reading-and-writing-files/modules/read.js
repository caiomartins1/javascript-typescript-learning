const fs = require('fs').promises;

module.exports = async (path) => {
  const dataJSON = await fs.readFile(path, 'utf-8');
  const data = JSON.parse(dataJSON);
  return data;
};
