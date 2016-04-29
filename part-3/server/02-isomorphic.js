import express from 'express';
import http from 'http';
import path from 'path';
import compression from 'compression';

import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from '../js/components/App';

const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname + '/..'));
app.engine('html', require('ejs').renderFile);

app.use(compression());

app.use('/build', express.static('build'));

app.get('*', (req, res) => {
  const app = ReactDomServer.renderToString(<App />);
  res.render('index.html', { app });
});

server.listen(process.env.PORT || 3000);
