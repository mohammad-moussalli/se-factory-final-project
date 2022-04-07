var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');

var usersRouter = require('./routes/users');
var scholarshipRouter = require('./routes/scholarships');
var faqRouter = require('./routes/faqs');
var faqCategoryRouter = require('./routes/faq_categories');
var contactUsRouter = require('./routes/contact_us');
var donorRouter = require('./routes/donors');
var storyRouter = require('./routes/stories');
var webinarRouter = require('./routes/webinars');
var webinarQuestionsRouter = require('./routes/webinars_questions');
var applicationsRouter = require('./routes/applications');
var relationshipRouter = require('./routes/relationships');

var app = express();
app.use(fileupload())

require('dotenv').config()

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
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
app.use('/applications', applicationsRouter);
app.use('/mentorship', relationshipRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
