import app from './app'

app.listen(app.get('port'))
console.log(`http://localhost:${app.get('port')}`)