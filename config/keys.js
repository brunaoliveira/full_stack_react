if (process.env.NODE_ENV === 'production') {
    console.log('PROD');
    module.exports = require('./prod');
} else {
    console.log('DEV');
    module.exports = require('./dev');
}