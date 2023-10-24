import { FastifyInstance } from 'fastify';

import { errors } from './errors';

export const errorHandler = (server: FastifyInstance) => {
    server.setErrorHandler((error, _, reply) => {
        server.log.error(`There was an error ${error.message}`);

        reply.status(errors[error.message] || 500).send({
            error: `There was an error ${error.message}`
        })
    })
}