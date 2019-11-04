module.exports = {
    apps: [
        {
            name: "chito-ra-production",
            script: "npm",
            args: "start",
            watch : true,
            env: {
                PORT: 3000,
            },
        }
    ],
    deploy: {
        user: "root",
        host: "193.124.178.241",
        key: "~/.ssh/id_rsa_chitora",
        ref: "origin/develop",
        repo: "https://github.com/timurlatypov/chito-ra-client.git",
        path: "/var/www/chito-ra/client/production/",
        "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.prod.config.js && pm2 save"
    }
};