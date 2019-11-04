module.exports = {
    apps: [
        {
            name: "chito-ra" + process.env.NODE_ENV,
            script: "npm",
            args: "start",
            watch : true,
            env: {
                HOST: "127.0.0.1",
                PORT: 3000,
                NODE_ENV: "development"
            },
            env_production: {
                HOST: "127.0.0.1",
                PORT: 4000,
                NODE_ENV: "production"
            },
        }
    ],
    deploy: {
        development : {
            user: "root",
            host: "193.124.178.241",
            key: "~/.ssh/id_rsa_chitora",
            ref: "origin/develop",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/chito-ra/client/develop/",
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save"
        },
        production: {
            user: "root",
            host: "193.124.178.241",
            key: "~/.ssh/id_rsa_chitora",
            ref: "origin/develop",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/chito-ra/client/production/",
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save --env production"
        },
    }
};