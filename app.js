const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const detailRouters = require('./routers/details');
const gameRouters = require('./routers/game');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const store = new MongoDBStore({
    uri: 'mongodb+srv://Naveen:Naveen123@cluster0-d01o9.mongodb.net/color-game',
    collection: 'sessions'
})

app.use(session({
    secret: "this is color-game",
    resave: false,
    saveUninitialized: false,
    store: store
 }));



app.use(detailRouters);
app.use(gameRouters);

app.use((req, res, next) => {
    res.status(404).render('404', {
      pageTitle: 'Page Not Found',
      path: '/404'
      
    });
  })

mongoose
.connect(
    'mongodb+srv://Naveen:Naveen123@cluster0-d01o9.mongodb.net/color-game?retryWrites=true&w=majority'
)
.then(result =>{
    app.listen(PORT);
})
.catch(err => console.log(err));



