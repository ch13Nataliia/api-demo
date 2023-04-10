require('dotenv').config();
const server = require('./server');


const { PORT = 3001,
NODE_ENV='development' } = process.env;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
