// 引用外部库
var express = require('express');
var app = express();
var path = require('path');
//app.set('views',path.join(__dirname,'views'));
//var handlebars = require('express-handlebars').create({defaultLayout:'main'});//错误的配置方式

var exhandlebars = require('express-handlebars');
app.engine('handlebars',exhandlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');

// 引用模块
var forture = require('./lib/fortune');

app.set('port',process.env.PORT || 3002);



// 添加路由 app.VERB添加路由的方法
app.get('/',function(req,res){
	//res.type('text/plain');
	//res.send('my new express');
	// 新路由
	res.render('home');

});


//var fortunes = ['this is my new work','this is new express','this is hbs','this is hbs','this is hbs'];

app.get('/about',function(req,res){
	//res.type('text/plain');
	//res.send('This is about page');
	//var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
	//res.render('about',{fortune:randomFortune});
	res.render('about',{fortune:fortune.getFortune()});
});


// 定制404页面
app.use(function(req,res){
	//res.type("text/plain");
	res.status(404);
	res.render('404');
	//res.send('404 - Not Found');
});


// 定制500页面
app.use(function(err,req,res,next){
	//res.type("text/plain");
	console.error(err.stack);
	res.status(500);
	res.render('500');
	//res.send('500 - Sever Error');
});


// 定制500页面
app.listen(app.get('port'),function(){
	console.log('Expres started on http://localhost:'+app.get('port')+';press Ctrl-C to terminate');
});

