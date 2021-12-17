# Devkit CLI - v1.1.4

<!-- <p align="center">
  <img src="logo.png" />
</p> -->

Devkit CLI is a Command Line tool for superfast scaffolding of any simple Vanilla JavaScript App.

## Installation

Install DevKit CLI globally using [npm](https://www.npmjs.com/package/devkit-js).

```bash
npm install -g devkit-js
```

## Creating a new project

In the terminal run

```bash
devkit create <your new project name>
```

This will create the project folder in your current working directory and take care of installing all the necessary dependencies.

The project will have the following folder structure:

```bash
├── ...
├── src                 # src directory, where your dev stuff go
│   ├── scripts         # JS components and other scripts
│   ├── styles          # SCSS components and main.scss
│   ├── views           # index.html & other pages
│   ├── app.js          # your app.js file
├── .gitignore
├── package.json
├── LICENSE
├── README.md
├── ...
```

Once the project is created navigate to the project directory and start building your new app. A Dev Server comes out of the box. In order to start the client side dev server run:

```bash
npm start
```

When ready to deploy/build for production, run in the terminal:

```bash
npm run build
```

This will automatically generate all the distribution files and put them in the auto-generated `dist` directory.

The `.scss` files will be compiled into `.css` and minified. The `.js` files will be transpiled.
All the styles and scripts will be automatically injected into your `index.html`.

## Contributing

If you find any issue, feel free to submit a pull request

## Author

[that-webdev-dude](https://github.com/that-webdev-dude)

## License

[MIT](https://github.com/iClusterDev/JS-Devkit-CLI/blob/main/LICENSE)
