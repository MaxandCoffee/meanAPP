var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        db: 'mongodb://localhost/meanapp',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    prdoduction: {
        rootPath: rootPath,
        db: 'mongodb://mhallsett:meanapp@ds015899.mlab.com:15899/meanapp',
        rootPathport: process.env.PORT || 80
    }
}