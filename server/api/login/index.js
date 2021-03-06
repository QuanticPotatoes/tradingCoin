import Koa from 'koa';
import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import config from 'config';

const app = new Koa();
const router = new Router();

router.post('/', (ctx, next) => {
  const { email, password } = ctx.request.body;
  if (email === 'admin' && password === 'password') {
    const secret = config.get('app.secret');
    const user = { username: 'admin' };
    const token = jwt.sign({
      ...user,
      role: 'admin'
    }, secret, { expiresIn: '1h' });

    ctx.session.authUser = token;
    ctx.body = user;
    return;
  }
  ctx.throw(401, 'bad credentials');
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
