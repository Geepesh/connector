const express = require('express')
const app = express()
const port = 7000 || process.env.PORT 


app.set('view engine','ejs')
app.use(express.static("files"))
app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(port,()=>{
    console.log(`${port}`)
})
