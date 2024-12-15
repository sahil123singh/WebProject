const express = require('express');
const app = express();// iske through express module k properties ko access kr skta hu...
const path = require('path');
const hbs = require('hbs');
const port = 8000;// process.env.PORT || 3000; for hosting


//--> path for html file ......public static path
const staticPath = path.join(__dirname,"../public");
const templetesPath = path.join(__dirname,"../templetes/views");
const partialsPath = path.join(__dirname,"../templetes/partials");

// use handlebars(hbs)

app.set('view engine', 'hbs');
app.set('views', templetesPath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));


// --------->routinggg <----------
app.get('/',(req, res) => {
    res.render('index');
});
app.get('/about',(req, res) => {
    // res.send("Welcome to my first Weather about page");
    // hbs file lo read krne k liye send k place pe render use krte h..
    res.render('about');
});
app.get('/weather',(req, res) => {
    res.render("weather");
});
app.get('*',(req, res) => {
    res.render("404error",{
        errorMsg : "Oops page not found"
    });
});// home, about or weather k alawa kuchh search kro to * run kregaa....




app.listen(port, () => {
    console.log(`listening to the port http://localhost:${port}`)
});