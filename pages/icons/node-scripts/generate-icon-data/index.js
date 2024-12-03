const fs = require("fs");
const searchWords = require("./search-words");

// Settings

const DEBUG = true;
const imageDir = "./icons";
const outputDir = "./output";

// 🚀

if (DEBUG) console.log("Generate icon data 🎨");

// 1. create an array of the files in the `imagesDir`
const filesArray = fs.readdirSync(imageDir);

// 2. generate json data in the correct format
const data = generateData(filesArray);

// 3. save the data as a json file in the `outputDir`
writeJsonToFile(data, outputDir);

// If you made it this far, it was a succes
if (DEBUG) console.log("Success ✅ \n\n");

// Functions

/**
 * Generate Data
 * Takes the filename array and outputs data in the followong format
 * [{group:string, text:string, url:string}]
 *
 * @param {data} Array - ["filename.xyz","..."]
 * @returns {Array}
 */
function generateData(arr) {
  let outputArr = [];

  arr.map((fileName) => {
    const remoteUrl = "";
    const url = `${remoteUrl}${fileName}`;
    const name = fileName.split("--")[0];
    const color = fileName.split("--")[1].split(".")[0];
    const text = searchWords[name] || "none";
    const cbusColors = ["grey", "green", "pine", "purple", "white"];
    const group = cbusColors.some((str) => str === color) ? "cbus" : "ms";

    outputArr.push({
      group,
      text,
      url,
    });
  });

  return outputArr;
}

/**
 * Write Json file to filesystem
 * Takes an Array, converts to json, then saves as a file
 *
 * @param {arr} Array - Array of image filenames
 * @param {outputDir} string - The folder to write to
 */
function writeJsonToFile(arr) {
  const date = new Date();
  const timestamp = // YYYYMMDDHHMMSS
    date.getFullYear().toString() +
    pad2(date.getMonth() + 1) +
    pad2(date.getDate()) +
    pad2(date.getHours()) +
    pad2(date.getMinutes()) +
    pad2(date.getSeconds());
  const filename = `${outputDir}/${timestamp}.json`;
  const json = JSON.stringify(arr);

  fs.writeFileSync(filename, json, "utf8");

  return true;
}

/**
 * Pad2
 * Pad numbers with zeros so there is always 2 digits
 *
 * @param {n} number - number to pad
 * @return {string} - 1 becomes "01"
 */
function pad2(n) {
  return n < 10 ? "0" + n : n;
}
