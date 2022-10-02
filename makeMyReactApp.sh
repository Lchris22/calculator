npm init -y;
npm install --save-dev webpack webpack-cli webpack-dev-server;
npm install react react-dom;
npm install --save-dev babel-loader @babel/preset-env @babel/core @babel/plugin-transform-runtime @babel/preset-react babel-eslint @babel/runtime;
echo "{
  \"presets\": [\"@babel/preset-env\", \"@babel/preset-react\"],
  \"plugins\": [\"@babel/plugin-transform-runtime\"]
}" > .babelrc;

echo "const path = require(\"path\");

module.exports = {
  mode: \"development\",
  entry: \"./index.js\",
  output: {
    path: path.resolve(__dirname, \"public\"),
    filename: \"main.js\",
  },

  target: \"web\",
  devServer: {
    port: \"3000\",
    static: [\"./public\"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [\".js\", \".jsx\", \".json\", \".ts\"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: \"babel-loader\",
      },
    ],
  },
};" > webpack.config.js;

A=",\"start\": \"webpack-dev-server\ .\",\"build\": \"Webpack .\"";
sed -i "7 i $A" package.json;

# add .ts in webpack

mkdir public;
touch public/index.html;
cd public;
echo "<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>React</title>
  </head>

  <body>
    <div id=\"root\"></div>
    <script src=\"main.js\"></script>
  </body>
</html>" > index.html;
cd ..;


mkdir src;
touch src/index.js;
touch src/App.js;

B="import React from \"react\";
import ReactDOM from \"react-dom\";
import App from \"./App\";

ReactDOM.render(<App />, document.querySelector(\"#root\"));";
cd src;
echo $B > index.js;

C="import React, { useState } from \"react\"; 

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      This was made from Scratch! Also hello world!
      <button onClick={increment}>Increment</button>
      {counter}
    </div>
  );
};

export default App;"

echo $C > App.js;

cd ..;

# sed  '4d' package.json;

D="\"main\" :\"./src/index.js\",";
sed -i "5 i $D" package.json;

# delete the extra main later





