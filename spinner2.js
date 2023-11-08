const animChars = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let counter = 0;

for (const char of animChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, 100 + (200 * counter));
  counter++;
}
