import express from 'express';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));
app.get('/', (_req, res) => res.type('text').send('HELLO FROM FIREBASE AUTH!'));
app.get('/me', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) res.status(403).type('json').send({ error: 'Forbidden' });
  return token;
});
app.listen(port, () => console.log(`Listening on port ${port}!`));
