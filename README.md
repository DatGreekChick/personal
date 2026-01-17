# personal

For information on my journey to becoming a Software Engineer, check out my
[Medium article on Codeburst].

---

## Tech Stack

- ⚛️ [React] for speed, scalability, and simplicity
- ️⚒️ [RTK Query] for cleaner Firebase queries and built-in caching
- 🔥 [Firebase] for painless deployment and realtime data storage/display
- 💅🏾 [`styled-components`] for easy CSS styling
- 📧 [EmailJS] for server-less contact form submissions direct to my inbox
- 🦀 [bun] for fast development, build times, and building all assets
- 🧪️ [@testing-library/react] and [msw] for robust frontend testing

### Frontend

The frontend starts in [`main.js`]. The root of the React app is in [`App.jsx`].

### Progressive Web App (PWA)

Google Chrome's Lighthouse is a great tool that has many audit categories. By
following their tips, upon visiting my page, there is a service worker
registered, which caches the root and all styles. It's also fun to see scores of
💯

### React Google Recaptcha

I have implemented a form on `/contact` that sends submissions directly to my
inbox using `emailjs`. The Google ReCAPTCHA library helps verify a human's
(online) humanity to prevent bots from submitting the form. It uses ReCAPTCHA
v3, which is invisible.

[medium article on codeburst]:
  https://codeburst.io/five-ways-becoming-a-software-engineer-made-me-a-wizard-de1060fc04d4
[react]: https://reactjs.org/
[rtk query]: https://redux-toolkit.js.org/rtk-query/overview
[firebase]: https://firebase.google.com/
[`styled-components`]: https://styled-components.com/
[emailjs]: https://www.emailjs.com/
[bun]: https://bun.com/docs/
[@testing-library/react]: https://testing-library.com/docs/
[msw]: https://mswjs.io/
[`main.js`]: main.js
[`app.jsx`]: client/App.jsx
