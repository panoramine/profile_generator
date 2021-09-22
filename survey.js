const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = "";

rl.question("What's your name? Nicknames are also acceptable :)\n", (answer1) => {
  rl.question("What's an activity you like doing?\n", (answer3) => {
    rl.question("What do you listen to while doing that?\n", (answer2) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer5) => {
        rl.question("What's your favourite thing to eat for that meal?\n", (answer4) => {
          rl.question("Which sport is your absolute favourite?\n", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer7) => {
              profile += `${answer1} loves litening to ${answer2} while ${answer3}, devouring ${answer4} for ${answer5}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`;
              console.log(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});
