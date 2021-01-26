const fs = require('fs')
const posthtml = require('posthtml')

const html = fs.readFileSync('index.html', 'utf-8')
const plugins = []
const options = {}

posthtml(plugins)
  .process(html, options)
  .then((result) =>  console.log(result.html))