const readFileSync = require('fs').readFileSync;

const notFound = (req,res) => res.status(404).send(readFileSync('./errpage/err.html','utf8'))


module.exports = notFound;