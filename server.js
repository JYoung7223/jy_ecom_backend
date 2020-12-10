// DB stuff
const SequelizeDB = require("./utils/dbConnection.js");

// APP stuff
const Express = require("express");
const Routes = require("./routes");
// Configure App Connection
const app = Express();
const PORT = process.env.APP_PORT || 3001;
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.use(Routes);

// Start Up App (Connect to DB then start listening) 
// force: true will drop then create
SequelizeDB.sync({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is listeing on port ${PORT}`);
        });
    })
    .catch((err)=> {
        console.log(err);
    });