// GERMAN LESSON FROM 2019

const fs = require('fs')

const chalk = require('chalk')

const einArray = [
  'Ich Bin',
  'Du bist',
  'Eine Frau',
  'Ein Mann',
  'Ein Junge',
  'Ein Maedchen',
  'Brot',
  'Wasser',
  'Kind',
  'Und',
  'Er sie es',
  'Ist',
  'Trinkt',
  'Ein Mann trinkt',
  'Ich und Du',
  'Trinkt sie?',
  'Ein Kind trinkt',
  'Der - Masculine',
  'Das - Neuter',
  'Die - Feminine',
  'Ich trinke',
  'Du trinkst',
  'Er/Sie/Es trinkt',
  'Der Mann',
  'Das Kind',
  'Der Junge',
  'Das Maedchen',
  'Die Frau trinkt',
  'Das Brot',
  'Das Kind ist ein Junge',
  'Die Frau trinkt',
]

const file = fs.createWriteStream('DE-lesson.txt')

file.on('error', (err) => {
  throw err
})

einArray.forEach((v, index) => {
  const startAt1 = index === 0 ? (index = 1) : (index += 1)
  console.log(chalk.blue(startAt1) + '. ' + chalk.green(v) + '\n')
  file.write(startAt1 + '. ' + v + '\n')
})

file.end()
