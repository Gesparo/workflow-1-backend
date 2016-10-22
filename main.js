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

saveArticle(
              Article,
              {
                title: 'Самое важное в SASS',
                date: '22 ноября 2016',
                body: '<p class="article__paragraph">' +
                'Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные' +
                'задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт' +
                'новая модель организационной деятельности играет важную роль в формировании новых' +
                'предложений. Товарищи! новая модель организационной деятельности играет важную роль в' +
                'формировании систем массового участия.' +
                '</p>' +
                '<p class="article__paragraph">' +
                'Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому' +
                'кругу (специалистов) участие в формировании систем массового участия. Идейные соображения' +
                'высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу' +
                '(специалистов) участие в формировании позиций, занимаемых участниками в отношении' +
                'поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности' +
                'способствует подготовки и реализации модели развития. С другой стороны рамки и место' +
                'обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров,' +
                'соответствует насущным потребностям.' +
                '</p>'
              }
            );
//
Article.findOne({}, function () {
  console.log(arguments);
});
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
  res.send(
      pug.renderFile('./source/template/pages/blog.pug', {
        title: 'Мой блог'
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
