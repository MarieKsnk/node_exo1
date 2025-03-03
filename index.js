import chalk from "chalk";
import http from "http";
import fs from "fs";

const PORT = 8000;
const localhost = "localhost";

fs.writeFileSync("newFile.txt", "Nouveau fichier");

fs.readFile("newFile.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur", err);
  } else {
    console.log(data);
  }
});

console.log(chalk.magenta("Marie"));
console.log(chalk.blue("Coralie"));
console.log(chalk.green("Fadia"));
console.log(chalk.red("Julie"));

const server = http.createServer((request, response) => {
  response.end("<h1>Hello world</h1>");
});

server.listen(PORT, localhost, () => {
  console.log(`Server is running on port ${PORT}`);
});
