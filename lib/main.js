const json2xls = require('json2xls');

const middleware = () => {
	return async (ctx, next) => {
		ctx.xls = (fn, data, config) => {
			const xls = json2xls(data, config);
			ctx.type = 'application/vnd.openxmlformats';
			ctx.attachment(fn);
			const binary = new Buffer(xls, 'binary');
			ctx.body = binary;
		}
		ctx.xlsx = ctx.xls;
		await next();
	}
}

module.exports = middleware;
