# personal

For information on my journey to becoming a Software Engineer, check out my
[Medium article on Codeburst].

---

## Tech Stack

- ⚛️ [React]/[React Hot Loader] (HMR) for speed, scalability, and simplicity
- 🔥 [Firebase] for painless deployment and real-time data storage/display
- 💅🏾 [`styled-components`] for easy CSS stylin'
- 📧 [EmailJS] for server-less contact form submissions direct to my inbox
- 🕸 [Webpack] v5 for bundling all assets
- 🤖 [Babel] for backwards compatible compilation

### Frontend

The frontend starts in [`main.js`]. The root of the React app is in [`App.jsx`].

#### a word about ~

The webpack config aliases `~` to mean "the root of the app". For example, you
can `import firebase from '~/fire'` anywhere in the app, without worrying about
how many `..`s to have in the relative path.

### Hot Loading

Hot module replacement is enabled, using `react-hot-loader` as the Babel plugin
and adding `new webpack.HotModuleReplacementPlugin` to enable hot reloading
globally. The latter is applied in [`webpack.config.js`].

The React components will update in place after saving, without losing their
state.

### Progressive Web App (PWA)

At some point in the development process, I discovered Google Chrome's
Lighthouse and wanted to see 100 in my scores for all their available audits.
So, upon visiting my page, there is a service worker registered, which caches
the root and all styles. I now have a :100:.

### React Google Recaptcha

I have implemented a form on `/contact` that sends submissions directly to my
email using `emailjs`. The Google ReCAPTCHA library helps verify a human's
(online) humanity to prevent bots from submitting the form. It uses ReCAPTCHA
v3, which is invisible.

### Testing

For testing, switch to the `testing` branch, which has my css import statements
commented out in my various components.

[medium article on codeburst]:
  https://codeburst.io/five-ways-becoming-a-software-engineer-made-me-a-wizard-de1060fc04d4
[react]: https://reactjs.org/
[react hot loader]: https://github.com/gaearon/react-hot-loader
[firebase]: https://firebase.google.com/
[`styled-components`]: https://styled-components.com/
[emailjs]: https://www.emailjs.com/
[webpack]: https://webpack.js.org/
[babel]: https://babeljs.io/
[`main.js`]: main.js
[`app.jsx`]: client/App.jsx
[`webpack.config.js`]: webpack.config.js
