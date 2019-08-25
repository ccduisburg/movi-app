   
const express = require('express');

const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./schema/schema');
const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
//dotevn
require('dotenv').config()

//db
const db=require('./helpers/db');

app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}));

app.listen(5000, () => {
	 console.log('server is running...');
});