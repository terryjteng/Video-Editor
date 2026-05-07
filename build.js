const fs = require('fs')

const key = process.env.CLERK_PUBLISHABLE_KEY || ''
if (!key) {
  console.warn('Warning: CLERK_PUBLISHABLE_KEY is not set — auth gate will not work')
}

fs.mkdirSync('dist', { recursive: true })

let html = fs.readFileSync('index.html', 'utf8')
html = html.replace('REPLACE_WITH_YOUR_CLERK_PUBLISHABLE_KEY', key)
fs.writeFileSync('dist/index.html', html)

if (fs.existsSync('dashboard.html')) {
  fs.copyFileSync('dashboard.html', 'dist/dashboard.html')
}

console.log('Build complete.')
