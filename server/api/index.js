import Koa from 'koa';
import mount from 'koa-mount';

import login from './login';

const app = new Koa();

app.use(mount('/login', login));

export default app;
