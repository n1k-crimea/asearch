const express = require('express');
const app = express();
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.set(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.use(function(res, req, next){
    res.status(400);
    res.render('400');
});

app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500)
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('RUN');
    
})