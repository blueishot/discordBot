// const { Client, Intents } = require("discord.js");
// const dotEnv = require("dotenv");

// //Lib discord e lib dotenv (para o token do discord)

// dotEnv.config();

// const client = new Client({
//   intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
// });

// client.login(process.env.TOKEN);

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const dotenv = require("dotenv");
const config = require("./config.json");

dotenv.config();

client.login(config.token);

client.on("ready", () => {
  console.log(`Estou online e me chamo ${client.user.username}`);
});
