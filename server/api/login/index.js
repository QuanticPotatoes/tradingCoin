import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.post('/', (ctx, next) => {
  const { email, password } = ctx.request.body;
  if (email === 'admin' && password === 'password') {
    ctx.session.authUser = { username: 'admin' };
    ctx.response.body = { username: 'admin' };
    return;
  }
  ctx.throw(401, 'bad credentials');
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
