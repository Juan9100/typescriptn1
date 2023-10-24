import { FastifyInstance } from 'fastify'

import { 
    IHeader, 
    IQuery, 
    IReply, 
    IVehicleBody, 
    IVehicleReply 
} from '../types';
import { postService } from '../services';


export const initRoutes = (server: FastifyInstance) => {
    server.get('/health-check', (request, reply) => {

        throw new Error('DBError');

        reply.code(201).send({
            message: 'server is up and running'
        })
    });
    
    server.get<{
        Querystring: IQuery,
        Reply: IReply
    }>('/greet', (request, reply) => {
        if (!request.query.name) {
            reply.code(400).send({
                error: 'There are some required params for the request missing'
            })
        }
    
        reply.code(201).send({
            message: `Hello ${request.query.name}`
        })
    });
    
    server.post<{
        Body: IVehicleBody,
        Headers: IHeader,
        Reply: IVehicleReply
    }>('/vehicle', (request, reply) => {
        const { model, brand, year } = request.body;
        const { km } = request.headers;

        const response = postService({ model, brand, year, km })

        request.log.info({ model, brand, year });
    
        reply.code(201).send(response);
    })
}