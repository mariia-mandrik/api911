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
        path: '/api/v2/corezoid/promocodes',
        method: 'GET',
        handler: indexController.getPromocodes,
        options: {
            auth: false,
            description: `Промокоды на покупку`,
            notes: `Промокоды по номеру телефона`,
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
                    phone: Joi.number().integer().min(12).default(380000000000),
                    limit: Joi.number().integer().min(1).default(100)
                        .example(100),
                },
            },
        },


});


    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});



init();




