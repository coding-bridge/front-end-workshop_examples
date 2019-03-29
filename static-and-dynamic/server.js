const express = require('express')
const path = require('path')

const app = express()
const port = 8000
const rootDir = path.dirname(process.mainModule.filename)

app.use(express.static('.'))

app.get('/', (req, res) => res.sendFile(path.join(rootDir, 'dynamic-index.html')))
app.get('/mind-blown', (req, res) => res.sendFile(path.join(rootDir, '/pages/mind-blown.html')))
app.get('/frustrated', (req, res) => res.sendFile(path.join(rootDir, '/pages/frustrated.html')))
app.get('/huge-love', (req, res) => res.sendFile(path.join(rootDir, '/pages/huge-love.html')))

app.listen(port, () => console.log(`app listening on port ${port}`))

