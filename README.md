# Devkit CLI

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

The created project will have the following folder structure:

```bash
├── ...
├── client
│   ├── src                 # src directory, where your client stuff go
│   │   ├── scripts         # JS components and main app.js
│   │   ├── styles          # SCSS components and main main.scss
│   │   ├── views           # index.html & other pages
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
├── LICENSE
├── README.md
```

Once the project is created navigate to the project directory and start building your new app. A Dev Server comes out of the box. In order to start the client side dev server run:

```bash
npm run dev:client
```

When ready to deploy/build the client side for production and generate the distribution files, run in the terminal:

```bash
npm run build
```

This will automatically generate all the distribution files and put them in the auto-generated `public` directory.

The `.scss` files will be compiled into `.css` and minified. The `.js` files will be transpiled using [babel](https://babeljs.io/). All the styles and scripts will be automatically injected into your `index.html`.

## Contributing

If you find any issue, feel free to submit a pull request

## Author

[iClusterDev](https://github.com/iClusterDev)

## License

[MIT](https://github.com/iClusterDev/JS-Devkit-CLI/blob/main/LICENSE)
