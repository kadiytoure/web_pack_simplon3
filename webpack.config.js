/*
//Webpack est un utilitaire node qui va permettre de gérer 
//le build de nos projets et de faire du javascript modulaire
// côté client en utilisant des import ou des require
//pour fonctionner, il va avoir besoin d'un fichier de 
//configuration appelé par défaut webpack.config.js qui
//contiendra obligatoirement 2 informations :
// - entry : le ou les points d'entrée que webpack va devoir
//scanner pour build le projet (généralement un ou plusieurs fichier js)
// - output: le ou les fichiers qui vont être générés par webpack
*/
// module.exports = {
//     entry: './main.js',
//     output: {
//         path: __dirname + '/dist',
//         filename: 'bundle.js'
//     },
//     devtool: 'inline-source-map'
// };
const webpack = require('webpack');

module.exports = {
    entry: {
        "example-ajax": './scripts/example-ajax.js',
        main: './main.js',
        vendor: [
            'jquery'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: ' [name].bundle.js'
    },
    /* On rajoute un plugin intégré par défaut à webpack 
    qui permettra d'utiliser un des bundle comme fichier
    vendor commun pour les autres bundles. Ici, notre
    vendor contiendra les libraries communes à nos autres bundle (juste jquery)*/
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    devtool: 'inline-source-map'
};