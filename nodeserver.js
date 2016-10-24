var express = require('express');
var fs = require('fs');
var pug = require('pug');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// parser for json
var jsonParser = bodyParser.json();

// connect to memory db
mongoose.connect('mongodb://localhost/test');

var Article = mongoose.model('Article', {
  title: String,
  date: String,
  body: String
});

var Feedback = mongoose.model('Feedback', {
  name : String,
  email : String,
  comment : String
});

// find first article
/*Article.findOne({}, function () {
  console.log(arguments);
});*/
// create server
var app = express();

// use gulp compiled files
app.use('/assets', express.static('./build/assets'));

// routes
app.get('/', function (req, res) {
  res.send(
            pug.renderFile('./source/template/pages/index.pug', {
              title: 'Welcome page'
            })
          );
});

app.get('/favicon.ico', function (req, res) {
  if (fs.existsSync('./build/favicon.ico')) {
    res.send(fs.readFileSync('./build/favicon.ico'));
  }
});

app.get('/works.html', function (req, res) {
  res.send(
      pug.renderFile('./source/template/pages/works.pug', {
        title: 'Мои работы'
      })
  );
});

app.get('/about.html', function (req, res) {
  res.send(
      pug.renderFile('./source/template/pages/about.pug', {
        title: 'Обо мне'
      })
  );
});

app.get('/blog.html', function (req, res) {
  var articles = require('./server/articles');

  res.send(
      pug.renderFile('./source/template/pages/blog.pug', {
        title: 'Мой блог',
        articlesArr: articles
      })
  );
});

app.post('/authorization', jsonParser,  function (req, res) {
  if(
        req.body &&
        'admin' == req.body.login &&
        'admin' == req.body.password &&
        'on' == req.body.confirmPerson &&
        'y' == req.body.secondConfirmPerson
    ) {
    res.send('success');
  } else {
    res.send('error');
  }
});

app.post('/feedback', jsonParser,  function (req, res) {
  if( saveInfoIntoDB(Feedback, req.body) ) {
    res.send('success');
  } else {
    res.send('error');
  }

  Feedback.findOne({}, function () {
   console.log(arguments);
   });
});

// listen on specific port
app.listen(7777, function () {
  console.log('Server start. Listening on port 7777!');
});

/**
 * Save into db
 * @param Class - mongoose model
 * @param data - fields
 */
function saveInfoIntoDB(Class, data) {
  new Class(data).save(function (error) {
    if( error ) {
      console.log('Fail to save data');
    } else {
      console.log('Data saved successfully');
    }
  });
}
