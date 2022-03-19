var createError = require('http-errors');
var express = require('express');

var usersRouter = require('./routes/users');
var scholarshipRouter = require('./routes/scholarships');
var faqRouter = require('./routes/faqs');
var faqCategoryRouter = require('./routes/faq_categories');
var contactUsRouter = require('./routes/contact_us');
var donorRouter = require('./routes/donors');
var storyRouter = require('./routes/stories');
var webinarRouter = require('./routes/webinars');
var webinarQuestionsRouter = require('./routes/webinars_questions');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

app.use('/users', usersRouter);
app.use('/scholarships', scholarshipRouter);
app.use('/faqs', faqRouter);
app.use('/faq-categories', faqCategoryRouter);
app.use('/contact-us', contactUsRouter);
app.use('/donors', donorRouter);
app.use('/stories', storyRouter);
app.use('/webinars', webinarRouter);
app.use('/webinar-questions', webinarQuestionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json('Something Went Wrong!');
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
