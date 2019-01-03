var tunnel = require('tunnel-ssh');

const ssh = async(config) => {
    return new Promise((resolve, reject) => {
        tunnel(config, function (error, server) {
            if(error) {
                console.log(error);
            } else {
                console.log(server);
            }
        }); 
    });
};

module.exports = { ssh };

