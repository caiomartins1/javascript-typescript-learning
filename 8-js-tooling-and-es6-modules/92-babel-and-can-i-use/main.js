/**
 * Most of the modern javascript features are not supported in all browser versions yet,
 * for this reason we can use tools like 'can i use' to check if a feature is supported or not in any browser
 * and Babel, that transforms our modern code in code supported by all browsers
 *
 * to run babel use: npx babel main.js -o bundle.js --presets=@babel/env
 * when using babel, we only will include the bundle file in our html
 */

const name = 'Caio';
const obj = { name };
const newObj = { ...obj };
console.log(newObj);
