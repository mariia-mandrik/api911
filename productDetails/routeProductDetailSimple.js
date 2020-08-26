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
        path: '/api/v2/corezoid/product/{id}/{type}',

        handler: indexController.getProductsDetailSimple,
        options: {
            auth: false,
            description: `Информация о товаре`,
            notes: `Информация о товаре, простой вариант`,
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
                params: {
                    id: Joi.number().integer().min(1),
                    type:Joi.string().pattern(new RegExp('simple|full|description|instruction|analogs'))
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




