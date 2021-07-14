const sample = require("lodash.sample");
const greetings = ["Hello", "Hi", "Greetings", "Howdy", "Bonjour"];
exports.handler = async () => `${sample(greetings)} from Lambda`;
