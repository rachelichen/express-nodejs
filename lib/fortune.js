var fortunes = ['this is my new work', 'this is new express', 'this is hbs2', 'this is hbs3', 'this is hbs4'];
console.log('模块fortune开始加载...');
exports.getFortune = function(){
	var idx = Math.floor(Math.random()*furtunes.length);
	return fortunes[idx];
};
console.log('模块fortune结束加载...');