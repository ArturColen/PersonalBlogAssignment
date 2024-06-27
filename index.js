const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');

const port = process.env.PORT || 3000;

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
