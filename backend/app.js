require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');
const cors = require('cors');

require('./models/connection');
const auth = require('./middleware/auth');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authUsersRouter = require('./routes/authUsers');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/authUsers', auth, authUsersRouter);

module.exports = app;
