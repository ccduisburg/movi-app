 const mongoose =require('mongoose');

// DB config
const db = require('../config/keys').mongoURI;

//connect to mongodb
mongoose.connect(
db,{ useNewUrlParser: true }
)
.then(() => console.log("MongoDb Connected"))
.catch(err => console.log(err));
