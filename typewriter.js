const sentence = "hello there from lighthouse labs";
let delay = 100;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  delay +=50

}
setTimeout(() => {
  console.log("\nNew line added at the end");
},1700);