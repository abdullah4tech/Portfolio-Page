#!/usr/bin/env node

/**
 * This script enforces the use of Bun as the package manager for this project.
 * It prevents accidental usage of npm, yarn, or pnpm.
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ANSI color codes for better terminal output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m',
  reset: '\x1b[0m',
}

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`
}

function checkPackageManager() {
  const userAgent = process.env.npm_config_user_agent

  if (!userAgent) {
    console.log(colorize('✅ No package manager detected. You can proceed with Bun!', 'green'))
    return
  }

  // Check if Bun is being used
  if (userAgent.includes('bun')) {
    console.log(colorize('✅ Great! You are using Bun as intended.', 'green'))
    return
  }

  // Check for other package managers
  const detectedPM = userAgent.split('/')[0]

  console.log('\n' + colorize('🚫 PACKAGE MANAGER ENFORCEMENT', 'red'))
  console.log(colorize('━'.repeat(50), 'red'))
  console.log(colorize(`❌ Detected package manager: ${detectedPM}`, 'red'))
  console.log(colorize('❌ This project is locked to use Bun only!', 'red'))
  console.log('\n' + colorize('🚀 To use this project correctly:', 'cyan'))

  if (detectedPM === 'npm') {
    console.log(colorize('   Instead of: npm install', 'yellow'))
    console.log(colorize('   Use:        bun install', 'green'))
    console.log(colorize('   Instead of: npm run dev', 'yellow'))
    console.log(colorize('   Use:        bun run dev', 'green'))
  } else if (detectedPM === 'yarn') {
    console.log(colorize('   Instead of: yarn install', 'yellow'))
    console.log(colorize('   Use:        bun install', 'green'))
    console.log(colorize('   Instead of: yarn dev', 'yellow'))
    console.log(colorize('   Use:        bun run dev', 'green'))
  } else if (detectedPM === 'pnpm') {
    console.log(colorize('   Instead of: pnpm install', 'yellow'))
    console.log(colorize('   Use:        bun install', 'green'))
    console.log(colorize('   Instead of: pnpm dev', 'yellow'))
    console.log(colorize('   Use:        bun run dev', 'green'))
  }

  console.log('\n' + colorize('📖 Why Bun?', 'magenta'))
  console.log(colorize('   • 🚀 Faster package installation', 'white'))
  console.log(colorize('   • ⚡ Better JavaScript runtime performance', 'white'))
  console.log(colorize('   • 🔧 Built-in bundler and test runner', 'white'))
  console.log(colorize('   • 🎯 Consistent development experience', 'white'))

  console.log('\n' + colorize('🔗 Install Bun:', 'cyan'))
  console.log(colorize('   curl -fsSL https://bun.sh/install | bash', 'green'))
  console.log(colorize('   # or', 'white'))
  console.log(colorize('   npm install -g bun', 'green'))

  console.log('\n' + colorize('━'.repeat(50), 'red'))

  // Exit with error code to prevent the command from continuing
  process.exit(1)
}

function checkBunVersion() {
  try {
    const bunVersionFile = path.join(process.cwd(), '.bunversion')
    const packageJsonFile = path.join(process.cwd(), 'package.json')

    if (fs.existsSync(bunVersionFile)) {
      const requiredVersion = fs.readFileSync(bunVersionFile, 'utf8').trim()

      try {
        const currentVersion = execSync('bun --version', { encoding: 'utf8' }).trim()

        if (currentVersion !== requiredVersion) {
          console.log(colorize(`⚠️  Bun version mismatch!`, 'yellow'))
          console.log(colorize(`   Required: ${requiredVersion}`, 'yellow'))
          console.log(colorize(`   Current:  ${currentVersion}`, 'yellow'))
          console.log(colorize(`   Consider upgrading: bun upgrade`, 'cyan'))
        } else {
          console.log(colorize(`✅ Bun version ${currentVersion} matches requirements`, 'green'))
        }
      } catch (error) {
        console.log(colorize('❌ Bun is not installed or not in PATH', 'red'))
        console.log(colorize('   Install Bun: curl -fsSL https://bun.sh/install | bash', 'cyan'))
        process.exit(1)
      }
    }

    // Check packageManager field in package.json
    if (fs.existsSync(packageJsonFile)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'))
      if (packageJson.packageManager && packageJson.packageManager.startsWith('bun')) {
        console.log(colorize('✅ Package manager locked to Bun in package.json', 'green'))
      }
    }
  } catch (error) {
    console.log(colorize(`⚠️  Could not verify Bun version: ${error.message}`, 'yellow'))
  }
}

function main() {
  console.log(colorize('\n🔍 Checking package manager enforcement...', 'cyan'))
  checkPackageManager()
  checkBunVersion()
  console.log(colorize('✅ All checks passed! Continue with Bun.\n', 'green'))
}

// Only run if this script is executed directly
if (process.argv[1] === __filename) {
  main()
}

export { checkPackageManager, checkBunVersion, main }
