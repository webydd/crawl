let express = require('express');
let Movie = require('./model').Movie;
let app = express();
let path = require('path');
app.use(express.static(path.resolve('../node_modules')));
//set view engine views engine
app.set('view engine','ejs');//指定使用后缀名为ejs的文件

app.get('/',function (req,res) {
    Movie.find({},function (err,movies) {
       res.render('index',{movies})
    });
});

app.listen(8080);