import fastify from 'fastify';

import { errorHandler } from './middlewares';
import { initRoutes } from './routes';

const server = fastify({
    logger: true,
});

initRoutes(server);
errorHandler(server);

server.listen({ port: 3000 }, (err, address) => {
    if(err) {
        console.log(`There was an error: ${err.message}`);
        process.exit(1);
    }

    console.log(`Listening on ${address}`);
})
