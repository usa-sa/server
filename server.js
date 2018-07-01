const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
var port = process.env.PORT || 3000;

server.listen(port, () => {
 console.log("JSON Server is running");
});
