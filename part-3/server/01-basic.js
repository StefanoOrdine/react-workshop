import express from 'express';
import http from 'http';
import path from 'path';
import compression from 'compression';

const app = express();
const server = http.createServer(app);

app.use(compression());

app.use('/build', express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${ __dirname}/../index.html`));
});

server.listen(process.env.PORT || 3000);
