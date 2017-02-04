let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  let currentDate = new Date(); //local variable for Callback Function
  res.render('index', { 
    title: 'Home',
  date: `${currentDate.getMonth()}, ${currentDate.getDay()}, ${currentDate.getFullYear()} (MM,DD,YYYY) -- ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} (HH:MM:SS)`

   });
});

/* GET about page. Extra route using about.ejs View*/
router.get('/about', (req, res, next) =>{
    let currentDate = new Date();//local variable for Callback Function
  res.render('about', { 
    title: 'About',
date: `${currentDate.getMonth()}, ${currentDate.getDay()}, ${currentDate.getFullYear()} (MM,DD,YYYY) -- ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} (HH:MM:SS)`
 }); //Render about.ejs view, ref. title/date - pass in 'About' and time, etc
});

module.exports = router;
