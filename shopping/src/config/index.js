const dotEnv  = require("dotenv");

if (process.env.NODE_ENV !== 'prod') {
    const configFile =  `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path:  configFile });
} else {
    dotEnv.config();
}

module.exports = {

    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
    EXCHANGE_NAME: 'ONLINE_SHOPPING',
    SHOPPING_BINDING_KEY: 'SHOPPING_SERVICE',
    CUSTOMER_BINDING_KEY: 'CUSTOMER_SERVICE',
    QUEUE_NAME: 'SHOPPING_QUEUE',
    RABBITMQ: {
        protocol: 'amqp',
        hostname: 'rabbitmq',
        port: 5672,
        username: 'myuser',
        password: 'mypassword',
        vhost: '/',
        authMechanism: ['PLAIN', 'AMQPLAIN', 'EXTERNAL']
    }
}
 