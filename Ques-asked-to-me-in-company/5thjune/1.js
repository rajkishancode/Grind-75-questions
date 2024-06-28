function findFile(root, fileName) {
  // Base case: if root is not an object, return false
  if (typeof root !== "object" || root === null) {
    return false;
  }

  // Check if the current directory contains the file
  if (root.hasOwnProperty(fileName)) {
    console.log("File found!");
    return true;
  }

  // Recursive case: if root is an object, search through its properties
  for (let key in root) {
    if (root.hasOwnProperty(key)) {
      // Only recurse if the property is an object
      if (typeof root[key] === "object" && root[key] !== null) {
        if (findFile(root[key], fileName)) {
          return true;
        }
      }
    }
  }

  // If the file is not found in any subdirectory, return false
  return false;
}

// Example usage:
const rootDirectory = {
  file21: "file21",
  folder21: {
    file22: "file22",
    folder22: {
      file23: "file23",
    },
  },
};
const fileToFind = "file23";

console.log(findFile(rootDirectory, fileToFind));
