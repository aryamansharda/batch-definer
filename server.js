var express           = require('express'),
    app               = express();

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/img', express.static(__dirname + '/client/views/img'));
app.use('/css', express.static(__dirname + '/client/views/css'));
app.use('/font-awesome', express.static(__dirname + '/client/views/font-awesome'));

app.listen(3000, function() {
  console.log('I\'m Listening...');
})
