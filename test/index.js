var koaJson2xlsx = require('../lib/main.js');
var Koa = require('koa');
var request = require('supertest');
var should = require('should');

var http = require('http');

describe('module', function() {
	it('should be a function', function(done) {
		should.exists(koaJson2xlsx);
		koaJson2xlsx.should.be.type('function');
		done();
	});
});

describe('response', function() {

	var jsonArr = [{
		foo: 'bar',
		qux: 'moo',
		poo: 123,
		stux: new Date()
	},
	{
		foo: 'bar',
		qux: 'moo',
		poo: 345,
		stux: new Date()
	}];

	it('should be correct', function(done) {
		var app = new Koa();
		app.use(koaJson2xlsx());

		app.use(function(ctx){
			ctx.xlsx('data.xlsx', jsonArr);
		});

		request(http.createServer(app.callback()))
		.get('/')
		.expect(function(res) {
			res.header['content-type'].should.equal('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
			res.header['content-disposition'].should.equal('attachment; filename="data.xlsx"');
			res.header.connection.should.equal('close');
		})
		.end(done);
	});
});
