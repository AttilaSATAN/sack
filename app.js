'use strict';
const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const route = require('koa-route')
const app = module.exports = new Koa();
const serve =require('koa-static');

app.use(views(path.join(__dirname, '/views'), { extension: 'html' }));

app.use(serve('dist'));
app.use(route.get('/*', async function(ctx) {
  await ctx.render('index');
}));


if (!module.parent) app.listen(3000, ()=>{
  console.log('Server listening port 3000');
});