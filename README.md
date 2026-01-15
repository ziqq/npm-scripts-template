# npm-scripts-template

Modern frontend build template using npm scripts. A lightweight alternative to webpack/vite for small projects. Uses only npm scripts to build CSS, JavaScript, optimize images and SVG icons.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)

## Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Available Commands](#-available-commands)
- [Used Packages](#-used-packages)
- [Development](#-development)

## Features

- **SCSS → CSS** - compilation with autoprefixer
- **ES6+ → ES5** - transpilation via Babel
- **Minification** - CSS and JavaScript
- **Image Optimization** - automatic compression
- **SVG Sprites** - icon consolidation
- **Live Reload** - automatic browser refresh
- **Linting** - ESLint for JS, Stylelint for SCSS
- **Fonts** - automatic copying to dist
- **Firebase** - ready-to-use deployment commands

## Quick Start

### Installation

```bash
# Clone repository
git clone https://github.com/ziqq/npm-scripts-template.git
cd npm-scripts-template

# Install dependencies
npm install

# Start project
npm start
```

After starting:

- Browser will open with your project
- Live server will start on `http://localhost:3000`
- Files will be automatically rebuilt on changes

## Project Structure

```
npm-scripts-template/
├── src/                     # Source files
│   ├── js/                  # JavaScript files
│   │   └── app.js           # Main JS file
│   ├── scss/                # SCSS styles
│   │   ├── app.scss         # Main stylesheet
│   │   ├── _variables.scss  # Variables
│   │   ├── _typography.scss # Typography and fonts
│   │   └── _mixins.scss     # Mixins
│   └── assets/              # Static resources
│       ├── fonts/           # Fonts
│       ├── images/          # Images
│       └── icons/           # SVG icons
├── dist/                    # Built files (generated)
│   ├── css/                 # Compiled CSS
│   ├── js/                  # Transpiled JS
│   └── assets/              # Optimized assets
├── index.html               # Main page
└── package.json             # Project configuration
```

## Available Commands

### Main Commands

| Command         | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `npm start`     | Clean dist, build project and start dev server with live reload |
| `npm run build` | Full production build                                           |
| `npm run clean` | Remove dist folder                                              |
| `npm run serve` | Start local server with live reload                             |

### Partial Builds

| Command                | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run build:css`    | Lint, compile SCSS → CSS + autoprefixer   |
| `npm run build:js`     | Lint, transpile ES6+ → ES5 + minification |
| `npm run build:images` | Compress images + generate SVG sprite     |

### Individual Tasks

#### CSS

```bash
npm run lint-scss    # Check SCSS files
npm run scss         # Compile SCSS → CSS
npm run autoprefixer # Add vendor prefixes
```

#### JavaScript

```bash
npm run lint    # ESLint check
npm run babel   # Transpile ES6+ → ES5
npm run uglify  # Minify JS
```

#### Assets

```bash
npm run fonts    # Copy fonts to dist
npm run imagemin # Optimize images
npm run icons    # Create SVG sprite
```

#### Watch Mode

```bash
npm run watch          # Run all watch tasks + server
npm run watch:css      # Watch SCSS changes
npm run watch:js       # Watch JS changes
npm run watch:fonts    # Watch font changes
npm run watch:icons    # Watch SVG changes
npm run watch:images   # Watch image changes
```

#### Firebase (optional)

```bash
npm run firebase:login # Firebase authentication
npm run firebase:init  # Initialize Firebase project
npm run firebase:serve # Local Firebase functions
```

## Used Packages

### Build and Compilation

- **[sass](https://github.com/sass/dart-sass)** - SCSS → CSS compiler
- **[autoprefixer](https://github.com/postcss/autoprefixer)** - automatic vendor prefixes
- **[babel](https://babeljs.io/)** - modern JavaScript transpilation
- **[uglify-js](https://github.com/mishoo/UglifyJS2)** - JavaScript minification

### Optimization

- **[imagemin-cli](https://github.com/imagemin/imagemin-cli)** - image compression
- **[svgo](https://github.com/svg/svgo)** - SVG optimization
- **[svg-sprite-generator](https://github.com/frexy/svg-sprite-generator)** - SVG sprite creation

### Linting

- **[eslint](https://eslint.org/)** - JavaScript linter
- **[stylelint](https://stylelint.io/)** - CSS/SCSS linter
- **[prettier](https://prettier.io/)** - code formatter

### Development Tools

- **[browser-sync](https://browsersync.io/)** - live reload server
- **[npm-run-all](https://github.com/mysticatea/npm-run-all)** - parallel task execution
- **[onchange](https://github.com/Qard/onchange)** - file change watcher

## Development

### Adding to Existing Project

1. Copy `"devDependencies"` from `package.json` to your project
2. Copy needed commands from `"scripts"` section
3. Run `npm install`
4. Adapt folder structure to your project

### Configuration

All configuration files are located in the project root:

- `.babelrc` - Babel settings
- `.prettierrc` - Prettier settings
- `eslint.config.cjs` - ESLint settings
- `stylelint.config.js` - Stylelint settings

### Requirements

- Node.js >= 16.0.0
- npm >= 7.0.0

## License

MIT © [Anton Ustinoff](https://github.com/ziqq)
