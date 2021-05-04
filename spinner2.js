const character = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 100;
for (let item of character) {
  setTimeout(() => {
    process.stdout.write(`\r ${item}   `);
  }, timer);
  timer += 200;
};