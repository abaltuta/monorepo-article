import express from 'express';

import { roll } from "@monorepo/diceroll";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(roll('1d20'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
