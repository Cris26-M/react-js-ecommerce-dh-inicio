const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors({
  origin: true,
  credentials: true,
  preflightContinue: false,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
server.options('*', cors());
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});