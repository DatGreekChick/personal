# personal

For information on my journey to becoming a Software Engineer, check out my
[Medium article on Codeburst].

---

## Tech Stack

- ⚛️ [React]/[React Refresh] (HMR) for speed, scalability, and simplicity
- 🔥 [Firebase] for painless deployment and real-time data storage/display
- 💅🏾 [`styled-components`] for easy CSS stylin'
- 📧 [EmailJS] for server-less contact form submissions direct to my inbox
- 🕸 [Webpack] v5 for bundling all assets
- 🤖 [Babel] for backwards compatible compilation

### Frontend

The frontend starts in [`main.js`]. The root of the React app is in [`App.jsx`].

#### a word about ~

The webpack config aliases `~` to mean "the root of the app". For example, you
can `import db from '~/db/firebase'` anywhere in the app, without worrying about
how many `..`s to have in the relative path.

### Fast Refreshing

Fast Refreshing is enabled, using `react-refresh` as the Babel plugin and adding
`plugins: [new ReactRefreshWebpackPlugin()]` (along with
`devServer: { hot: true }`) to enable fast refreshing globally. The latter is
applied in [`webpack.config.js`] via the specific [webpack plugin].

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

[medium article on codeburst]:
  https://codeburst.io/five-ways-becoming-a-software-engineer-made-me-a-wizard-de1060fc04d4
[react]: https://reactjs.org/
[react refresh]:
  https://github.com/facebook/react/tree/main/packages/react-refresh
[firebase]: https://firebase.google.com/
[`styled-components`]: https://styled-components.com/
[emailjs]: https://www.emailjs.com/
[webpack]: https://webpack.js.org/
[babel]: https://babeljs.io/
[`main.js`]: main.js
[`app.jsx`]: client/App.jsx
[`webpack.config.js`]: webpack.config.js
[webpack plugin]: https://github.com/pmmmwh/react-refresh-webpack-plugin
