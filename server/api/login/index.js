import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.post('/', (ctx, next) => {
  console.log(ctx.request);
  ctx.body = ctx.request;
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
