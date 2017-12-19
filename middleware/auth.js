import nodeCookie from 'node-cookie';
import jwt from 'jsonwebtoken';
import atob from 'atob';
import config from '../config/default.json';

export default async ({ isServer, store, req, res, redirect }) => {
  if (!isServer) return null;

  const session = JSON.parse(atob(nodeCookie.get(req, 'koa:sess')));

  await jwt.verify(session.authUser, config.app.secret, (err, decoded) => {
    if (err) redirect('/login');
  });
};
