'use strict';
var a = require('./a.json')
const Hapi = require('@hapi/hapi');
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/api/v2/corezoid/product',

        handler: indexController.getProductsNameSearch,
        options: {
            auth: false,
            description: `Информация о товаре по названию`,
            notes: `Информация о товаре по названию`,
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
                    name: Joi.string().min(3)
                }
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




