const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const compression = require('compression')
const mongoose = require('mongoose');

const userRouter = require('./routes/userRoute');
const crimeRoute = require('./routes/crimeRoutes');


const app = express();
const port = process.env.PORT||4000;

// CONNECT DATABASE

mongoose.connect('mongodb://localhost:27017/crime', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('DB connection successful'));

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session({
  secret: "thisiscrimetrackersecret",
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24},
  resave: false
}));

app.use(compression());
app.use(express.static("public"));
//app.use(express.static("views"));
app.use('/',express.json());
app.use(express.urlencoded({extended:false}));
app.use(userRouter);
app.use(crimeRoute);

//Log in page
app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

//Sign up page
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','signup.html'));
});

app.get('/about',(req,res)=>{
  res.render('about');
 });

app.get('/home',(req, res)=>{
  res.render('home');
});

app.get('/views/reportCrime', function(req, res) {
  res.render('/reportCrime');
});

app.get('/views/crimealerts',(req, res) => {
  res.render('crimealerts');
 });


const server = app.listen(port);
console.log('Listening on port '+ port);

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!! Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });