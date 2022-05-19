# Devkit CLI - v1.1.10

Devkit CLI is a Command Line tool for superfast scaffolding of any simple Vanilla JavaScript App.

## Installation

Install DevKit CLI (GitHub Package) globally using [npm](https://github.com/that-webdev-dude/devkit-cli/packages/1149378).

```bash
npm install @that-webdev-dude/devkit-cli
```

## Creating a new project

In the terminal run

```bash
devkit create <your new project name>
```

This will create the project folder in your current working directory and take care all the necessary dependencies.

The project folder will have the following structure:

```bash
├── ...
├── src                 # src directory, where your dev stuff go
│   ├── fonts           # JS components and other scripts
│   ├── images          # JS components and other scripts
│   ├── scripts         # JS components and other scripts
│   ├── styles          # SCSS components and main.scss
│   ├── views           # index.html & other pages
│   ├── app.js          # your app.js file
├── main.js             # webpack bundler entry
├── .gitignore
├── package.json
├── LICENSE
├── README.md
├── ...
```

If building a multi-page static website, you will need to add the .html pages in the project.config.js:

```js
module.exports = {
  name: "--project-name--",
  pages: [
    // if making a multipage
    // static site, add your pages here
    {
      title: "index",
      filename: "index.html",
      template: "./src/views/index.html",
    },
  ],
};
```

## Running the Dev Server and/or Building for production

Once the project is created, navigate to the project directory and start building your new app. A Dev Server comes out of the box. In order to start the client side dev server run:

```bash
npm start
```

It is a best practice to put all your stuff in the `src` directory. Here you can choose to structure your workflow using `TypeScript` or plain `JavaScript`.
When ready to deploy/build for production, run in the terminal:

```bash
npm run build
```

This will automatically generate all the distribution files and put them in the auto-generated `dist` directory.

The `.scss` files will be compiled into `.css` and minified. The `.ts` files will be compiled to plain JavaScript, and the `.js` files will be transpiled.
All the styles and scripts will be automatically injected into your `index.html`.

## Contributing

If you find any issue, feel free to submit a pull request

## Author

[that-webdev-dude](https://github.com/that-webdev-dude)

## License

[MIT](https://github.com/that-webdev-dude/devkit-cli/blob/main/LICENSE)
