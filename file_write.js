const fs = require('fs');

const content = 'Hello, Good Morning!';
fs.writeFile('example1.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully.');
  }
});
