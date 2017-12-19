import nodeCookie from 'node-cookie';
import jwt from 'jsonwebtoken';
import atob from 'atob';

export default async ({ isServer, store, req, res, redirect }) => {
  if (!isServer) {
    return null;
  }

  const session = JSON.parse(atob(nodeCookie.get(req, 'koa:sess')));

  await jwt.verify(session.authUser, 'i love potatoes', (err, decoded) => {
    if (err) {
      redirect('/login');
    }
  });
};
