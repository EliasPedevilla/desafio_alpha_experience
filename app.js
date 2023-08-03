const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");

const userRouter = require('./routes/user')
const productRouter = require('./routes/products')
const authRouter = require('./routes/auth')

const app = express();

// middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/auth', authRouter)

app.use((req, res, next) => {
  next(res.status(404).send("Cannot complete the request"));
});

app.listen(3000, () => {console.log("server listening")});

module.exports = app;
