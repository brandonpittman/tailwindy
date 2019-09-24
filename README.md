# Tailwindy - the Eleventy + Tailwind CSS starter

Tailwindy is a minimal starting point for Eleventy projects using

Features:
- [11ty](https://www.11ty.io/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [light-server](https://github.com/txchen/light-server)
- [PostCSS](https://postcss.org/)

- Purge CSS only runs for production builds.

## Getting Started

Clone this repo and install its dependencies: `npm install`.

### Development

```
❯ npm run dev
```

 And in debug mode:
 
```
❯ npm run dev:debug
```

You can view the rendered site at the given access URL served up by light-server:
```
❯ light-server is listening at http://localhost:4000
```

The local url is configured in `.lightserverrc`

### To build ready for production

```
❯ npm run build
```

Tai11s will build and optimize your code ready for deployment

- Pack and optimize javascript
- Build tailwind CSS from config, compile your Sass and run PurgeCSS to remove unusued classes based on the output `dist` folder

## BONUS: Travis Github Pages deployment script

`.travis.yml` can be modified to suit your own needs. This simple script will build from a named branch and deploy to Github Pages via your [Travis CI](https://travis-ci.org/) account. 

Store your Github Token securely in the Travis control panel
