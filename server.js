var Hapi = require('hapi');
var Path = require('path');
var config = require('getconfig');
var server = new Hapi.Server('0.0.0.0', config.http.port);
var moonbootsConfig = require('./moonbootsConfig');
var fakeApi = require('./fakeApi');
var internals = {};

// set clientconfig cookie
internals.configStateConfig = {
    encoding: 'none',
    ttl: 1000 * 60 * 15,
    isSecure: config.isSecure
};

server.route({
    method: 'GET',
    path: '/images/{param*}',
    handler: {
        directory: {
            path: __dirname + '/public/images'
        }
    }
});

server.route({
    method: 'GET',
    path: '/fonts/{param*}',
    handler: {
        directory: {
            path: __dirname + '/public/fonts'
        }
    }
});

server.state('config', internals.configStateConfig);
internals.clientConfig = JSON.stringify(config.client);
server.ext('onPreResponse', function(request, reply) {
    if (!request.state.config) {
        var response = request.response;
        return reply(response.state('config', encodeURIComponent(internals.clientConfig)));
    }
    else {
        return reply();
    }
});

// require moonboots_hapi plugin
server.pack.register({plugin: require('moonboots_hapi'), options: moonbootsConfig}, function (err) {
    if (err) throw err;
    server.pack.register(fakeApi, function (err) {
        if (err) throw err;
        // If everything loaded correctly, start the server:
        server.start(function (err) {
            if (err) throw err;
            console.log("Webapiner is running at: http://localhost:" + config.http.port + " Yep. That\'s pretty awesome.");
        });
    });
});
