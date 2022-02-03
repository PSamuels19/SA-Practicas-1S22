import app from './app'

app.listen(app.get('port'))
console.log(`Sesion server on port ${app.get('port')}`)