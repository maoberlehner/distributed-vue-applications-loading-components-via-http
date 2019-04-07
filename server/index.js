const express = require(`express`);
const path = require(`path`);

const STATIC_PORT = 8200;

const app = express();

app.use(express.static(path.resolve(__dirname, `components`), {
  maxAge: `365d`,
}));

app.listen(STATIC_PORT);

// eslint-disable-next-line no-console
console.log(`Listening on: http://localhost:${STATIC_PORT}`);
