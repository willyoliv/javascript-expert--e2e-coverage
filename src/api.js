const http = require('http');
const { once } = require('events');

const DEFAULT_USER = { 
  username: 'Willy', 
  password: '123' 
};

const routes = {
  '/contact:get': (_, response) => {
    response.write('contact us route');
    return response.end();
  },
  '/login:post': async (request, response) => {
    const user = JSON.parse(await once(request, 'data'));
    const toLower = (text) => text.toLowerCase();

    if (
      toLower(user.username) !== toLower(DEFAULT_USER.username) ||
      user.password !== DEFAULT_USER.password
    ) {
      response.writeHead(401);
      response.end("Log in failed");
      return;
    }

    return response.end("Log in succeeded");
  },
  default (_, response) {
    response.writeHead(404);
    response.end('not found');
  },
}

function handler(request, response) {
  const { url, method } = request;
  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;

  const chosen = routes[routeKey] || routes.default;

  return chosen(request, response);
}

const app = http.createServer(handler)
  .listen(3000, () => console.log('Server is running on port 3000'));

module.exports = app;