const express = require('express');
const app = express()
const path = require('path')


console.log(path.join(__dirname,'\index.html'));

//settings
app.set('port',3000)
app.set ('views',path.join(__dirname,'views'))
app.set ('view engine','ejs')
app.engine('html',require('ejs').renderFile)

//static files

app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(require('./routes/index')   )

//listen the server
app.listen(app.get('port'), () => {
    console.log('server on port',app.get('port'));
}) 

app.render