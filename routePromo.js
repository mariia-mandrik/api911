'use strict';
var a = require('./a.json')
const Hapi = require('@hapi/hapi');
const fetch = require('node-fetch');


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/api/v2/corezoid/promo',

        handler: indexController.getPharmaciesIdBalance,
        options: {
            auth: false,
            description: `Товарные остатки в аптеке`,
            notes: `По коду аптеки (id) получить ненулевые товарные остатки`,
            tags: ['api', ' '],
            plugins: {
                good: {
                    suppressResponseEvent: true,
                },
                'hapi-swagger': {
                    produces: ['application/json']

                },
            },
            validate: {

                query: {
                    offset: Joi.number().integer().min(0).default(0),
                    limit: Joi.number().integer().min(1).default(100)
                        .example(100),
                },
            }
        }
    });


    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});



init();




