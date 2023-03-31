const path = require("path");

module.exports = {
  entry: "./src/EmbedFunction.js",
  output: {
    filename: "my-functions.js",
    path: path.resolve(__dirname, "dist"),
    library: "MyFunctions",
    libraryTarget: "umd",
  },
};
