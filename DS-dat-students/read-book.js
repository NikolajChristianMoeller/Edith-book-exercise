import fs from "fs/promises";

async function readTxtBook(file) {
  const book = await fs.readFile(file, "utf-8");
  const wordArray = book.match(/[a-zA-Z']+/g);
  return wordArray;
}

async function writeBookToFile(bookAsArray, filename) {
  const bookArray = JSON.stringify(bookAsArray);
  await fs.writeFile(`${filename}-words.json`, bookArray);
}

async function main() {
  // add your own txt book file
  const book = await readTxtBook("little_miss_oddity.txt");
  // name the json file
  await writeBookToFile(book, "oddity");
}

main();
