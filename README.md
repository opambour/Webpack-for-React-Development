# Webpack for React Development

## Usage

- Clone or download this repo in a new project.

- Run this command in cmd under project directory:
    > npm install

    This will install all the dependecies listed in package.json file. That's it

## Tutorial

You can follow the below tutorials and create your own webpack from scratch...

### Learn & Create Your Own

1. Install webpack webpack-cli webpack-dev-server

2. Create a file 'webpack.config.js'; this is the configuration file for webpack
    > There are 3 dependencies (loaders) that's required in our .js/.jsx rule and need to be installed
    > npm i -D cache-loader babel-loader eslint-loader

3. Install babel and it's dependencies
    @babel/core, @babel/plugin-transform-runtime, @babel/preset-env, @babel/preset-flow (optional),
    @babel/preset-react, and @babel/runtime

4. Create .babelrc configuration file
    > @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to        micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

    Note:
    @babel/preset-react always includes the following plugins
        - @babel/plugin-syntax-jsx
        - @babel/plugin-transform-react-jsx
        - @babel/plugin-transform-react-display-name

    And with the development option:

    @babel/plugin-transform-react-jsx-self
    @babel/plugin-transform-react-jsx-source

    Note: Flow syntax support is no longer enabled in v7. For that, you will need to add the Flow preset.

5. Install eslint and create .eslintrc.json
    > npm install eslint --save-dev
    > eslint --init to create .eslintrc.json

    During eslint --init command, we chose Airbnb style guide...this is how it looks like in our console.

    ? How would you like to configure ESLint? Use a popular style guide
    ? Which style guide do you want to follow? Airbnb
    ? Do you use React? Yes
    ? What format do you want your config file to be in? JSON

    The following peerDependencies will be installed automatically for you by eslint...
    + eslint-config-airbnb@17.1.0
    + eslint-plugin-jsx-a11y@6.1.1
    + eslint-plugin-import@2.14.0
    + eslint-plugin-react@7.11.1

    Why eslint?
    ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions.

6. Install react and it's dependencies
    > npm install react react-dom

7. Testing dependencies (jest)
    > npm i -D jest babel-jest react-test-renderer