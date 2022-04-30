import routes from './routes';
const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use('/api', routes);
app.set('view engine', 'ejs');

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*',(req, res)=>{
  res.render('NotFound')
})

app.listen(PORT => console.log(`Server is running on port : ${PORT}`))
