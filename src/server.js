const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send('Hello, World — deployed on EKS via Helm & Jenkins!');
});

app.get('/healthz', (_, res) => res.status(200).send('ok'));

app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`);
});
