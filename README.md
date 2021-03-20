# personal

For information on my journey to becoming a Software Engineer, check out my
[Medium article on Codeburst].

---

## Tech Stack/NPM Packages Used

- React
- React Hot Loader
- Firebase (real-time database, hosting)
- EmailJS
- Webpack v5
- Babel
- Enzyme
- FontAwesome
- Jest

### Frontend

The frontend starts in [`main.js`]. The root of the react app is in [`App.jsx`].

#### a word about ~

The webpack config aliases `~` to mean "the root of the app". For example, you
can `import firebase from '~/fire'` anywhere in the app, without worrying about
how many `..`s to have in the relative path.

### Firebase

I used firebase here so that I could have a seamless deployment process, but I
also wanted a more modular file structure.

### Hot Loading

Hot module replacement is enabled. The only `react-hot-loader` plugin necessary
for this app - due to Webpack 4+ - is `new webpack.HotModuleReplacementPlugin`
to enable hot reloading globally. It is applied in [`webpack.config.js`].

The React components will update in place after saving, without losing their
state.

#### Hot Updates

A `hot` directory is in place so as to keep any and all hot updates in a `.js`
and a `.json` file for respective alterations. This way, the updates don't
populate in the `public` directory and cause mayhem.

### Progressive Web App (PWA)

At some point in the development process, I discovered Google Chrome's
Lighthouse and wanted to see 100 in my scores for all their available audits.
So, upon visiting my page, there is a service worker registered, which caches
the root and all styles. I now have a :100:.

### React Google Recaptcha

I have implemented a form on `/contact` that sends submissions directly to my
email using `emailjs`. The Google ReCAPTCHA library helps verify a human's
(online) humanity so as to prevent bots from submitting the form. It uses
ReCAPTCHA v3, which is invisible.

**⚠️ Note:** This is currently not working in tandem with `emailjs`, as
`emailjs` only supports v2. The email will send a message, but no name or email
values, rendering this entire functionality useless until `emailjs` updates to
allow the user to choose between ReCAPTCHA versions.

### Testing

For testing, switch to the `testing` branch, which has my css import statements
commented out in my various components.

[medium article on codeburst]:
  https://codeburst.io/five-ways-becoming-a-software-engineer-made-me-a-wizard-de1060fc04d4
[`main.js`]: ./main.js
[`app.jsx`]: client/App.jsx
[`webpack.config.js`]: webpack.config.js
