var express = require('express');
var fs = require('fs');
var pug = require('pug');
var mongoose = require('mongoose');

// connect to memory db
mongoose.connect('mongodb://localhost/test');

var Article = mongoose.model('Article', {
  title: String,
  date: String,
  body: String
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

// listen on specific port
app.listen(7777, function () {
  console.log('Server start. Listening on port 7777!');
});

/**
 * Save article into db
 * @param ArticleClass - mongoose article model
 * @param data - fields
 */
function saveArticle(ArticleClass, data) {
  new ArticleClass(data).save(function (error) {
    if( error ) {
      console.log('Fail to save article');
    } else {
      console.log('Article saved successfully');
    }
  });
}
