/**
 * Created by Lata Tiwari on 5/18/2017.
 */

/* TO REMOVE : Warning: Possible EventEmitter memory leak detected.
 11 change listeners added. Use emitter.setMaxListeners() to increase limit*/
require('events').EventEmitter.prototype._maxListeners = 0;

var express = require('express');
server = express();

server.use(express.static('app'));

server.get('/',function (req,res) {
    res.sendFile( __dirname+'/app/index.html' );
});


server.listen(9000);