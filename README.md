# personal [![codecov-badge]][codecov]

For information on my journey to becoming a Software Engineer, check out my
[Medium article on Codeburst].

---

## Getting Started

```sh
bun install
bun start       # dev server
bun test        # run tests
bun run build   # production build
bun run deploy  # build + deploy to Firebase
```

---

## Tech Stack

- 🦀 [bun] for fast development, build times, and building all assets
- 📧 [EmailJS] for serverless contact form submissions direct to my inbox
- 🔥 [Firebase] for painless deployment and realtime data storage/display
- ⚛️ [React] for speed, scalability, and simplicity
- ️⚒️ [RTK Query] for cleaner Firebase queries and built-in caching
- 🧪️ [@testing-library/react] and [msw] for robust frontend testing

### Frontend

The frontend starts in [`main.js`]. The root of the React app is in [`App.jsx`].
Styles are written as CSS Modules, scoped per component.

### Progressive Web App (PWA)

Google Chrome's Lighthouse is a great tool that has many audit categories. By
following their tips, upon visiting my page, there is a service worker
registered, which caches the root and all styles. It's also fun to see scores of
💯

### Performance

Tracked in [#395] (bundle optimization) and [#422] (Lighthouse scores). Several
optimizations have been made to improve load times and reduce bundle size:

- Lazy-loaded routes (About, Uses) and code splitting for smaller initial chunks
- Scoped `GoogleReCaptchaProvider` to the Contact route only
- Switched to `firestore/lite` for a lighter Firebase footprint
- Replaced third-party animation, icon, and spinner libraries with CSS
  keyframes, [react-icons], and an inline SVG — eliminating heavy dependencies
- Google Fonts loaded asynchronously to unblock FCP; navbar logo optimized for
  LCP
- Firestore data prefetched on nav hover to eliminate loading spinners

### React Google Recaptcha

I have implemented a form on `/contact` that sends submissions directly to my
inbox using `emailjs`. The Google ReCAPTCHA library helps verify a human's
(online) humanity to prevent bots from submitting the form. It uses ReCAPTCHA
v3, which is invisible.

Submissions are also filtered against a blocklist of known SEO spam domains and
message patterns, so junk never reaches my inbox.

[@testing-library/react]: https://testing-library.com/docs/
[#395]: https://github.com/DatGreekChick/personal/issues/395
[#422]: https://github.com/DatGreekChick/personal/issues/422
[`app.jsx`]: client/App.jsx
[bun]: https://bun.com/docs/
[codecov-badge]:
  https://codecov.io/github/DatGreekChick/personal/branch/main/graph/badge.svg?token=gyMId8xc0a
[codecov]: https://codecov.io/github/DatGreekChick/personal
[emailjs]: https://www.emailjs.com/
[firebase]: https://firebase.google.com/
[`main.js`]: main.js
[medium article on codeburst]:
  https://codeburst.io/five-ways-becoming-a-software-engineer-made-me-a-wizard-de1060fc04d4
[msw]: https://mswjs.io/
[react]: https://react.dev/
[react-icons]: https://react-icons.github.io/react-icons/
[rtk query]: https://redux-toolkit.js.org/rtk-query/overview
