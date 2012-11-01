var express = require('express');
var app = express();
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res){
  console.log('here');
  res.render('/public/index.html');
});

app.listen(process.env.PORT || 3000);