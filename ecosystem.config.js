module.exports = {
    apps: [
        {
            name: "chito-ra",
            append_env_to_name: true,
            script: "npm",
            args: "start",
            watch : true,
            env: {
                NODE_ENV: 'production',
                PORT: 3001
            },
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
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save"
        }
    }
};