//code ni sir
// const express = require('express');
// const app = express();
// app.use(express.json());
// const products = require('./routes/product');
// app.use('/api/v1',products);
// module.exports = app



//** new lessson */
const express = require('express');
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());

const products = require('./routes/product');
const auth = require('./routes/auth');
app.use('/api/v1',auth);
app.use('/api/v1',products);

module.exports = app
