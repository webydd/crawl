let Movie = require('../model').Movie;
let async = require('async');
let debug = require('debug')('crawl:write');
//负责把数据引入数据库中
exports.write = function (movies,callback) {
    async.forEach(movies,function (movie,cb) {
        Movie.create(movie,cb);
        debug(`写入电影:${movie.name}`)
    },callback)

};
/*
测试数据
exports.write([{name:'超级大山炮',url:'snapao'}],function (err,result) {

})*/
