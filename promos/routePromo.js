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

        handler: indexController.getPromosFromSite,
        options: {
            auth: false,
            description: `Акции с сайта`,
            notes: `Акции с сайта`,
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




