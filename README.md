# About Me

For information on my journey to becoming a Software Engineer, feel free to read
my
[Medium article on Codeburst](https://codeburst.io/five-ways-becoming-a-software-engineer-made-me-a-wizard-de1060fc04d4)
on the matter. This website is what initially got me into learning how to code,
so I'm exceptionally proud of it!

---

# Tech Stack/NPM Packages Used

- Babel
- Enzyme
- Firebase (real-time database, hosting)
- FontAwesome
- Jest
- Progressive Web App
- React
- React DOM
- React Google Recaptcha
- React Hot Loader
- React Router DOM
- React Text Loop
- Webpack (@4)
  - Webpack CLI
- Webpack Dev Server

## Frontend

The frontend starts in [`main.js`](./main.js). The root of the react app is in
[`App.jsx`](client/App.jsx).

### a word about ~

The webpack config aliases `~` to mean "the root of the app". For example, you
can `import firebase from '~/fire'` anywhere in the app, without worrying about
how many `..`s to have in the relative path.

## Firebase

I used firebase here so that I could have a seamless deployment process, but I
also wanted a more modular file structure. So, my projects and writing pieces
get populated by Firebase's Realtime database. This allows for quick and easy
changes.

## Hot Loading - For Production

Hot module replacement is enabled. The only react-hot-loader plugin necessary
for this app - due to Webpack 4 - is `new webpack.HotModuleReplacementPlugin` to
enable hot reloading globally. It is applied in
[webpack.config.js](webpack.config.js).

The React components will update in place after saving, without losing their
state.

### Hot Updates

A `hot` directory is in place so as to keep any and all hot updates in a `.js`
and a `.json` file for respective alterations. This way, the updates don't
populate in the `public` directory and cause mayhem. (This can also happen when
you have too many node processes running and haven't shut off your computer in
weeks :satisfied:.)

## Progressive Web App (PWA)

As I was in production, I discovered Google Chrome' Lighthouse and wanted to see
100 in my scores for all their available audits. So, upon visiting my page,
there is a service worker registered, which caches the root and all styles. I
now have a :100:.

## React Google Recaptcha

I have implemented a form on `/contact` that populates any submissions into a
Google doc for simplicity. The Google recaptcha library helps verify a human's
(online) humanity so as to prevent bots from submitting information into the
doc.

## Testing

For testing, switch to the `testing` branch, which has my css import statements
commented out in my various components.
