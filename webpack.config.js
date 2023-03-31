const path = require("path");

module.exports = {
  entry: "./src/EmbedFunction.js",
  output: {
    filename: "embed-functions.js",
    path: path.resolve(__dirname, "dist"),
    library: "EmbedFunctions",
    libraryTarget: "umd",
  },
};
