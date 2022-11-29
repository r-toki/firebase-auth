import express from 'express';
import morgan from 'morgan';

import { getAuth } from './firebase-app';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));
app.get('/', (_req, res) => res.type('text').send('HELLO FROM FIREBASE AUTH!'));
app.get('/me', async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) throw new Error('token not found');
    const decodedToken = await getAuth().verifyIdToken(token);
    return res.type('json').send(decodedToken);
  } catch {
    return res.status(403).type('json').send({ error: 'Forbidden' });
  }
});
app.listen(port, () => console.log(`Listening on port ${port}!`));
