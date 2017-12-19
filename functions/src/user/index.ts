import * as admin from 'firebase-admin';
import {Router, Request, Response, NextFunction} from 'express';
import {BadRequest, InternalServerError} from 'throw.js';

const router = Router();

router.get('/:uid', (request: Request, response: Response, next: NextFunction) => {
  if (!request.params.uid) {
    next(new BadRequest());
  }
  next();
}, async (request: Request, response: Response, next: NextFunction) => {
  let user;

  try {
    user = await admin.auth().getUser(request.params.uid);

    response.status(200).send(user);
  } catch (e) {
    next(new InternalServerError(e));
  }
});

router.post('/create', (request: Request, response: Response, next: NextFunction) => {
  if (!request.body.email || !request.body.password) {
    next(new BadRequest('email and password is required'));
  }
  next();
}, async (request: Request, response: Response, next: NextFunction) => {
  let user;
  try {
    user = await admin.auth().createUser({
      email: request.body.email,
      password: request.body.password,
      displayName: request.body.displayName
    });

    const token = await admin.auth().createCustomToken(user.uid);

    response.status(200).json({token, ...user});
  } catch (e) {
    next(new InternalServerError(e));
  }
});

export default router;
