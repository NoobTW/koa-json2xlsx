var json2xls = require('json2xls');

var middleware = function(ctx, next){
	ctx.xls = function(fn, data, config){
		var xls = json2xls(data, config);
		ctx.type = 'application/vnd.openxmlformats';
		ctx.attachment(fn);
		var binary = new Buffer(xls, 'binary');
		ctx.body = binary;
	}
	ctx.xlsx = ctx.xls;
	next();
}

module.exports = middleware;
