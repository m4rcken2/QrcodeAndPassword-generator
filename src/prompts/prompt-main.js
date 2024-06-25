import chalk from "chalk"

const mainPrompt = {
  name: 'select',
  description: chalk.yellow('Please enter your choise (1-- Qrcode  (2--Password'),
  pattern: /^[1-2]+$/,
  message: chalk.red('Choose only between 1 and 2.'),
  required: true,
}

export default mainPrompt
