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
                PORT: 3000
            },
        }
    ],
    deploy: {
        production: {
            user: "root",
            host: "176.57.215.122",
            key: "~/.ssh/id_rsa_chitora_timeweb",
            ref: "origin/master",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/chito-ra/client/production/",
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save"
        }
    }
};
