let mongoose = require('mongoose');
//启动并连接数据库
mongoose.connect('mongodb://localhost/201701crawl');
//定义骨架
let MovieSchema = new  mongoose.Schema({
    name:String,
    url:String
});
//定义模型
let Movie = mongoose.model('Movie',MovieSchema);
exports.Movie = Movie;