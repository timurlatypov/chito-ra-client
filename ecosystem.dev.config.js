module.exports = {
    apps: [
        {
            name: "chito-ra-development",
            script: "npm",
            args: "start",
            watch : true,
            env: {
                PORT: 4000,
            },
        }
    ],
    deploy: {
        user: "root",
        host: "193.124.178.241",
        key: "~/.ssh/id_rsa_chitora",
        ref: "origin/develop",
        repo: "https://github.com/timurlatypov/chito-ra-client.git",
        path: "/var/www/chito-ra/client/develop/",
        "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.dev.config.js && pm2 save"
    }
};