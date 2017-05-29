let read = require('./read').read;
let write = require('./write').write;
let async = require('async');
let url  = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let Movie = require('../model').Movie;
let debug = require('debug')('crawl:main');
function start() {
    async.waterfall([
        //为了防止数据库数据重复,开始任务之前清除数据库
        function (callback) {
            Movie.remove({},callback)
        },
        function (data,callback) {
            read(url,callback);//callback(err,movies)
        },
        function (movies,callback) {
            write(movies,callback);
        }
    ],function () {
        console.log('全部任务完成');

    },function () {
        debug(`全部任务完成`)
    })
}

start();