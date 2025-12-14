/**
 * Run `firebase serve` and `webpack-dev-server` together, to get
 * firebase routes and function emulation alongside webpack-dev-server's
 * hot loading.
 */

import { spawn as spawnChild } from 'child_process'
import debug from 'debug'
import pc from 'picocolors'
import thru from 'through2'
import stripAnsi from 'strip-ansi'

const colors = [pc.cyan, pc.green, pc.magenta, pc.blue]
let nextColorIdx = 0

let resolveFirebaseUrl = null
let hasStartedListening = false
const firebaseUrl = new Promise(r => (resolveFirebaseUrl = r)).then(stripAnsi)

// `firebase serve` prints a line that looks like this
// when it starts listening:
const localServerRe = /(?:Local server|Server listening): (.*)/

const env = vars => ({
  env: Object.assign(vars, process.env),
})
const forceColor = env({ FORCE_COLOR: 3 })

// Build functions
spawn('🤖 build library', 'bun', ['run', 'watch'], forceColor).toConsole()

// Run `firebase serve`
const firebaseServe = spawn(
  '🔥  firebase serve',
  'bunx',
  ['firebase', 'serve', '--only', 'hosting'],
  forceColor
)

// Scan through its output...
firebaseServe.stdout
  // We're looking for the line where firebase serve tells us
  // what URL it's accessible at (usually localhost:5000, but it
  // may have to pick another port).
  .pipe(
    thru(function (line, enc, cb) {
      // To avoid confusion, we don't pass through stdout until
      // after the "listening" line has passed.
      cb(null, hasStartedListening ? line : debug('dev')('%s', line))

      // Is this the line telling us where the local server is?
      const match = line.toString().match(localServerRe)

      // If so, resolve the firebase url promise with the url,
      // and start passing through lines.
      if (match) {
        resolveFirebaseUrl(match[1].trim())
        hasStartedListening = true
      }
    })
  )
  .pipe(process.stdout)

// Pipe stderr from firebase serve to our stderr.
firebaseServe.stderr.pipe(process.stderr)

// Once `firebase serve` has started, launch webpack-dev-server
// with the appropriate environment variables set.
firebaseUrl.then(FIREBASE_SERVE_URL =>
  spawn(
    '🌍  webpack dev server',
    'npx',
    ['webpack', 'serve', '--hot', '--open', ...process.argv.slice(2)],
    {
      env: Object.assign(
        {
          NODE_ENV: 'development',
          FORCE_COLOR: 3,
          FIREBASE_SERVE_URL,
        },
        process.env
      ),
    }
  ).toConsole()
)

function spawn(label, ...args) {
  const child = spawnChild(...args)

  const labeler = labelerFor(label)

  child.on('exit', status => {
    if (status) {
      error(labeler('exited with status', status))
    }
    process.exit(status)
  })

  child.stdout = child.stdout.pipe(labelWith(labeler))
  child.stderr = child.stderr.pipe(labelWith(labeler))
  child.toConsole = () => {
    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
  }

  return child
}

function labelerFor(label, color = colors[nextColorIdx++ % colors.length]) {
  const coloredLabel = color(`[ ${label} ]\t`)
  return (...message) => `${coloredLabel}${message.join(' ')}`
}

function labelWith(labeler) {
  return thru(function (line, enc, cb) {
    cb(null, labeler(line))
  })
}

function error(...args) {
  console.error(pc.bold(pc.red(...args)))
}
