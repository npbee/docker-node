import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'Hello World';
});

app.listen(8080, () => console.log('Running on 8080'));
