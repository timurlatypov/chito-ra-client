const SUFFIX = process.argv.indexOf('--env') === -1 ? '' :
    '-' + process.argv[process.argv.indexOf('--env')+1]

module.exports = {
    apps: [
        {
            name: "chito-ra" + SUFFIX,
            append_env_to_name: true,
            script: "npm",
            args: "start",
            watch : true,
            env: {
                NODE_ENV: 'development',
                PORT: 3001
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 3000
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
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save"
        },
        develop : {
            user: "root",
            host: "193.124.178.241",
            key: "~/.ssh/id_rsa_chitora",
            ref: "origin/develop",
            repo: "https://github.com/timurlatypov/chito-ra-client.git",
            path: "/var/www/chito-ra/client/develop/",
            "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save"
        }
    }
};