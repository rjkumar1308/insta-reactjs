const path = require('path');

module.exports = {
    paths: function (paths, env) {        
        paths.appIndexJs = path.resolve(__dirname, 'src/front-end/index.js');
        paths.appSrc = path.resolve(__dirname, 'src');
        paths.appPublic = path.resolve(__dirname, 'public');
        paths.appHtml = path.resolve(__dirname, 'public/index.html');
        return paths;
    }
}