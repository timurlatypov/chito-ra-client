module.exports = {
    apps: [
        {
            name: "client",
            script: "npm",
            args: "start",
            watch : true,
            env: {
                HOST: "127.0.0.1",
                PORT: 3000,
                NODE_ENV: "production"
            }
        }
    ],
    deploy: {
        prod: {
            user: "root",
            host: "193.124.178.241",
            key: "~/.ssh/id_rsa_chitora",
            ref: "origin/master",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/chito-ra/client/production",
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save"
        },
        dev : {
            user: "root",
            host: "194.58.120.209",
            key: "~/.ssh/id_rsa_chitora",
            ref: "origin/develop",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/client/dev/",
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save"
        }
    }
};