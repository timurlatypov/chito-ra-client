module.exports = {
    apps: [
        {
            name: "chito-ra",
            append_env_to_name: true,
            script: "npm",
            args: "start",
            watch : true,
            env_develop: {
                NODE_ENV: "develop",
                HOST: "127.0.0.1",
                PORT: 3001,
            },
            env_production: {
                NODE_ENV: "production",
                HOST: "127.0.0.1",
                PORT: 3000,
            }
        }
    ],
    deploy: {
        production: {
            user: "root",
            host: "193.124.178.241",
            key: "~/.ssh/id_rsa_chitora",
            ref: "origin/master",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/chito-ra/client/production/",
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save --env production"
        },
        develop : {
            user: "root",
            host: "193.124.178.241",
            key: "~/.ssh/id_rsa_chitora",
            ref: "origin/develop",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/chito-ra/client/develop/",
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save --env develop"
        }
    }
};