require('dotenv').config();
const server = require('./server');


const { PORT = 3001} = process.env;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
