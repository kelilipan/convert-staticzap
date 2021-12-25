const convert = require("../../dist/index.cjs");
const slowRawGithubURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";
const staticallyURL = convert(slowRawGithubURL);
console.log("Before", slowRawGithubURL);
console.log("After", staticallyURL);
