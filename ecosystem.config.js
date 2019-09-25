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
        production: {
            user: "safeuser",
            host: "194.58.120.209",
            key: "~/.ssh/id_rsa_gitlab",
            ref: "origin/master",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/client/prod/",
            "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
        },
        staging : {
            user: "safeuser",
            host: "194.58.120.209",
            key: "~/.ssh/id_rsa_gitlab",
            ref: "origin/master",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/client/dev/",
            "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
        }
    }
};