import chalk from "chalk";
import http from "http";
import fs from "fs";
import axios from "axios";

const PORT = 8000;
const localhost = "localhost";

fs.writeFile("newFile.txt", "Nouveau fichier", (err) => {
  if (err) console.error(err);
  else console.log("File is create");
});

fs.readFile("./newFile.txt", "utf8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

const fetchGoogle = async () => {
  try {
    const response = await axios.get(`https://www.google.com`);
    fs.writeFile("google.html", response.data, (err) => {
      if (err) console.error(err);
    });
  } catch (err) {
    console.error(err);
  }
};

fetchGoogle();

const server = http.createServer((request, response) => {
  response.end("<h1>Hello world</h1>");
});

server.listen(PORT, localhost, () => {
  console.log(`Server is running on port ${PORT}`);
});
