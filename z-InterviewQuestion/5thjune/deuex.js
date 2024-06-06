/*  Q. find a file, let's say you have a system ,
       where you have files and folders and
       you want to check if a particular
       file exists or not let's say you have a root folder and you have to find "file22".
*/

function findFile(root, fileName) {
  if (typeof root !== "object" && root === null) {
    return false;
  }

  //check if the current folder contains the file
  if (root.hasOwnProperty(fileName)) {
    console.log("File found!");
    return true;
  }

  //iterate over keys and check
  for (let key in root) {
    if (root.hasOwnProperty(key)) {
      if (typeof root[key] === "object" && root[key] !== null) {
        if (findFile(root[key], fileName)) {
          return true;
        }
      }
    }
  }
  return false;
}
let rootDirectory = { file21: "file21", folder21: { file22: "file22" } };
const fileToFind = "file22";

console.log(findFile(rootDirectory, fileToFind));
