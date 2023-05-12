const express = require("express");
const app = express();
const cors = require('cors');
const port = 8000;
// midle ware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors()); 
// ** This will fire our mongoose.connect statement to initialize our database connection
require('./config/mongoose.config');
// ** This is where we import the product routes function from our product.routes.js file
const AllMyPersonRoutes = require("./routes/Product.route");
AllMyPersonRoutes(app);

console.log("---------------- 1-server --------------------");
const server = app.listen(port, () =>
  console.log(` product manager (Core) on port ${server.address().port}!`)
);